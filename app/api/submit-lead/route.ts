import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

function escapeCsv(value: unknown) {
  const text = String(value ?? '');
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json();

    if (!name || !email) {
      return NextResponse.json({ message: 'Name and Email are required.' }, { status: 400 });
    }

    const timestamp = new Date().toISOString();
    const csvRow = `\n${[timestamp, name, email, phone || ''].map(escapeCsv).join(',')}`;
    const filePath = path.join(process.cwd(), 'cro_leads.csv');
    fs.appendFileSync(filePath, csvRow);

    return NextResponse.json({ message: 'Submission successful.' });
  } catch (error) {
    console.error('Error handling lead submission:', error);
    return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
  }
}
