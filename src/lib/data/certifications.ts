import { certificationSchema } from './schemas';

const certifications = certificationSchema.array().parse([
	{
		name: 'Senior Programmer',
		issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
		issued_date: 'Nov 2023',
		expiry_date: 'Nov 2026',
		credential_id: 'TIK 1565 30858 2023'
	},
	{
		name: 'Mobile Programmer',
		issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
		issued_date: 'Aug 2025',
		expiry_date: 'Aug 2028',
		credential_id: 'ICT 2121 06153 2025'
	}
]);

export default certifications;
