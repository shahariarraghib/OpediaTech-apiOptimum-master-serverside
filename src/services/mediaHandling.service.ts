import path = require("path");
import uploadBase64FileDto from "../dtos/mediaHandling/uploadBase64File.dto";

const multer = require('multer');
const fs = require('fs');
const documentsFolder = 'assets/documents'
const picturesFolder = 'assets/pictures'
const maxFileUpload = 12	// 12 is the maximum number of uploadable files. See https://github.com/expressjs/multer#usage

export class MediaHandlingService {

	constructor() {

	}

	public uploadDocument(key: string, multiple: boolean) {
		const storage = multer.diskStorage({
			destination: function (req, file, callback) {
				callback(null, documentsFolder)
			},
			filename: function (req, file, callback) {
				const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
				callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
			}
		})

		const documentUpload = multer({
			storage: storage,
			limits: {
				fileSize: 1012 * 1012 * 10
			},
			fileFilter: function (req, file, callback) {
				var ext = path.extname(file.originalname);
				if (ext !== '.pdf') {
					return callback(new Error('Only pdf documents are allowed'))
				}
				callback(null, true)
			}
		})

		if (multiple == false) {
			return documentUpload.single(key);
		}
		return documentUpload.array(key, maxFileUpload);
	}

	public uploadPicture(key: string, multiple: boolean) {
		const storage = multer.diskStorage({
			destination: function (req, file, callback) {
				callback(null, picturesFolder)
			},
			filename: function (req, file, callback) {
				const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
				callback(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
			}
		})

		const imageUpload = multer({
			storage: storage,
			fileFilter: function (req, file, callback) {
				var ext = path.extname(file.originalname).toLowerCase();
				if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.webp') {
					return callback(new Error('Only images are allowed'))
				}
				callback(null, true)
			}
		})

		if (multiple == false) {
			return imageUpload.single(key);
		}
		return imageUpload.array(key, maxFileUpload);
	}

	public async uploadBase64StringDocument(data: uploadBase64FileDto) {
		if (data.fileExtension.toLowerCase() !== 'pdf') {
			throw new Error('Ce type de fichier n\'est pas autorisé !');
		}
		const base64image = data.b64String.split(';base64,').pop();
		const filename = data.originalFileName + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + data.fileExtension;
		const path = 'assets/documents/' + filename;
		await fs.writeFile(`${path}`, base64image, { encoding: 'base64' }, function (err) {
			if (err) {
				console.log('Error : ' + err.message);
				throw new Error('Erreur lors de l\'enregistrment du fichier. Réessayez !');
			}
		});
		return filename;
	}

	public async uploadBase64StringImage(data: uploadBase64FileDto) {
		const ext = data.fileExtension.toLowerCase();
		if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.webp') {
			throw new Error('Ce type de fichier n\'est pas autorisé !');
		}
		const base64image = data.b64String.split(';base64,').pop();
		const filename = data.originalFileName + '-' + Date.now() + '-' + Math.round(Math.random() * 1E9) + data.fileExtension;
		const path = 'assets/pictures/' + filename;
		await fs.writeFile(`${path}`, base64image, { encoding: 'base64' }, function (err) {
			if (err) {
				console.log('Error : ' + err.message);
				throw new Error('Erreur lors de l\'enregistrment du fichier. Réessayez !');
			}
		});
		return filename;
	}

	public async writeBase64StringImage(data: uploadBase64FileDto) {
		const ext = data.fileExtension.toLowerCase();
		if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.webp') {
			throw new Error('Ce type de fichier n\'est pas autorisé !');
		}
		const base64image = data.b64String.split(';base64,').pop();
		const filename = data.originalFileName + data.fileExtension;
		const path = 'assets/pictures/' + filename;
		await fs.writeFile(`${path}`, base64image, { encoding: 'base64' }, function (err) {
			if (err) {
				console.log('Error : ' + err.message);
				throw new Error('Erreur lors de l\'enregistrment du fichier. Réessayez !');
			}
		});
		return filename;
	}
}