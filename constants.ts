
export const TEMPLATE_ID = `
[NAMA_LENGKAP]
[ALAMAT]
[NOMOR_TELEPON]
[EMAIL]

Kepada Bapak/Ibu Tim Rekrutmen
[NAMA_PERUSAHAAN]

Dengan hormat,

Perkenalkan, nama saya [NAMA_LENGKAP]. Melalui surat ini, saya ingin mengajukan lamaran untuk posisi [POSISI_YANG_DILAMAR] di [NAMA_PERUSAHAAN] sebagaimana informasi yang saya dapatkan.

Berikut adalah ringkasan dari pengalaman dan keahlian yang saya miliki:
[PENGALAMAN_DAN_KEAHLIAN]
Saya sangat tertarik dengan kesempatan ini dan yakin dapat memberikan kontribusi positif bagi tim Anda.

Saya sangat berharap dapat berdiskusi lebih lanjut mengenai bagaimana saya bisa menjadi aset berharga untuk [NAMA_PERUSAHAAN]. Terima kasih atas waktu dan pertimbangan Anda.

Hormat saya,

[NAMA_LENGKAP]
`;

export const TEMPLATE_EN = `
[FULL_NAME]
[ADDRESS]
[PHONE_NUMBER]
[EMAIL]

To the Hiring Team
[COMPANY_NAME]

Dear Hiring Manager,

My name is [FULL_NAME], and I am writing to express my strong interest in the [POSITION] position at [COMPANY_NAME].

Here is a brief overview of my relevant skills and experience:
[EXPERIENCE_AND_SKILLS]
I am confident that my background makes me a strong candidate for this role, and I am eager to contribute to your team's success.

I would welcome the opportunity to discuss my qualifications further in an interview. Thank you for your time and consideration.

Sincerely,

[FULL_NAME]
`;

export const OLLAMA_DEFAULT_PROMPT = `
You are a professional HR assistant. Your task is to write a compelling job application letter based on the user's details.

**IMPORTANT: The letter must follow this exact structure:**

**Part 1: Applicant's Contact Information (at the top)**
[Applicant's Full Name]
[Applicant's Address]
[Applicant's Phone Number]
[Applicant's Email]

**(blank line)**

**Part 2: Recipient**
Kepada Tim Rekrutmen [Company Name] (or English equivalent)

**(blank line)**

**Part 3: Letter Body**
Start with a salutation (e.g., "Dengan hormat,"), then write the main body of the letter. The body should introduce the applicant, state the position they are applying for, highlight their skills and experience, and express strong interest in the role.

**(blank line)**

**Part 4: Closing**
End with a closing phrase (e.g., "Hormat saya,") followed by the applicant's full name.

**Do not use placeholders in the final output.** The letter must be written in {language}.

**User Details:**
- Name: {name}
- Email: {email}
- Phone: {phone}
- Address: {address}
- Applying to Company: {companyName}
- For Position: {position}
- User's Skills & Experience: {experience}
`;
