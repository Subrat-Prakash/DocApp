// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { IncomingForm, File as FormidableFile } from 'formidable';
import fs from 'fs';
import path from 'path';

// Define FileWithPath interface
interface FileWithPath extends FormidableFile {
  path: string;
}

// Disable Next.js built-in bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public/uploads');

// Ensure the upload directory exists
fs.mkdirSync(uploadDir, { recursive: true });

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new IncomingForm({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 5 * 1024 * 1024, // 5 MB limit
    });

    try {
      const fields = await new Promise<any>((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          resolve({ fields, files });
        });
      });

      const file = fields.files.image as FileWithPath;
      if (!file) {
        res.status(400).json({ error: 'No file uploaded' });
        return;
      }

      const filePath = file.path;
      const fileName = path.basename(filePath);

      res.status(200).json({ imageUrl: `/uploads/${fileName}` });
    } catch (error) {
      console.error('Error parsing form data', error);
      res.status(500).json({ error: 'Error parsing form data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default handler;
