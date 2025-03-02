// api/get-api-key.js
const validMachineIds = {
    '0C-54-15-93-EB-DA', //VIBHAV
    // '10-6F-D9-32-D8-53': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SHREY
    // '00-41-0E-2B-A2-79': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //ABHINAV
    // '10-68-38-0A-54-05': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SAJI
    // '2C-3B-70-58-89-1D': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //PREM
    // '10-3D-1C-42-90-73': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SHREY
    // //'52-58-B9-AD-25-83': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    // 'A0-59-50-3A-02-96': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    // 'F4-26-79-3A-1B-69': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SHREY
    // 'CC-47-40-2E-E3-AE': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SHREY
    // '00-D4-9E-BD-CE-5F': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SAKCHI 1
    // 'DC-21-5C-6A-86-B9': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SAKCHI 2
    // 'CC-47-40-1E-D6-00': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SAKCHI 3
    // '10-68-38-74-02-11': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SAKCHI 4
    // '2C-8D-B1-51-8D-CB': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SAKCHI 5
    // '30-03-C8-0E-E4-65': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SAKCHI 6
    // // '50-5A-65-B5-AF-44': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //PRIYANSHU RANA
    // '50-5A-65-F6-04-B7': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SHREY
    // 'B4-8C-9D-5E-2A-97': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    // 'A4-42-3B-6B-3F-DC': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    // '14-D4-24-34-99-91': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    // '50-5A-65-F6-C5-2B': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    // '82-AE-CE-9C-11-28': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    // 'D4-1B-81-C9-ED-D9': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',
    // 'B0-A4-60-BA-55-22': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo',


    // Add more machine IDs and their associated API keys here
};

export default function handler(req, res) {
    const key = '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'
    if (req.method === 'POST') {
        const { machine_id } = req.body;

        if (validMachineIds[machine_id]) {
            res.status(200).json({ api_key: key });
        } else {
            res.status(401).json({ error: 'Failed to get verification key. Check Internet, license or contact us.', error_code: 401 });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
