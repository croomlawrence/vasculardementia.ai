import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phone } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and Email are required.' });
    }

    const timestamp = new Date().toISOString();
    const csvRow = `\n${timestamp},${name},${email},${phone || ''}`;
    
    try {
      const filePath = path.join(process.cwd(), 'cro_leads.csv');
      fs.appendFileSync(filePath, csvRow);
      return res.status(200).json({ message: 'Submission successful.' });
    } catch (error) {
      console.error('Error writing to CSV file:', error);
      return res.status(500).json({ message: 'Internal Server Error.' });
    }

  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
