
import { FormData } from '../types';
import { TEMPLATE_ID, TEMPLATE_EN } from '../constants';

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}


export const generateFromTemplate = (formData: FormData): string => {
    const { name, phone, email, address, language, companyName, position, experience } = formData;
    const template = language === 'id' ? TEMPLATE_ID : TEMPLATE_EN;

    const replacements = {
        '[NAMA_LENGKAP]': name,
        '[FULL_NAME]': name,
        '[EMAIL]': email,
        '[NOMOR_TELEPON]': phone,
        '[PHONE_NUMBER]': phone,
        '[ALAMAT]': address,
        '[ADDRESS]': address,
        '[NAMA_PERUSAHAAN]': companyName,
        '[COMPANY_NAME]': companyName,
        '[POSISI_YANG_DILAMAR]': position,
        '[POSITION]': position,
        '[PENGALAMAN_DAN_KEAHLIAN]': experience,
        '[EXPERIENCE_AND_SKILLS]': experience,
    };

    let letter = template;
    for (const [placeholder, value] of Object.entries(replacements)) {
        // Only replace the placeholder if the value is not an empty string.
        // Otherwise, keep the placeholder in the template.
        if (value) {
            letter = letter.replace(new RegExp(escapeRegExp(placeholder), 'g'), value);
        }
    }
    
    return letter.trim();
};
