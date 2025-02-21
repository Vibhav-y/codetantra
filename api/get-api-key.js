// api/get-api-key.js
const validMachineIds = {
    '0C-54-15-93-EB-DA': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //VIBHAV
    '10-6F-D9-32-D8-53': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SHREY
    '00-41-0E-2B-A2-79': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //ABHINAV
    // '10-68-38-0A-54-05': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SAJI
    // '2C-3B-70-58-89-1D': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //PREM
    '10-3D-1C-42-90-73': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SHREy
    // 'A0-59-50-3A-02-96': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //rajat
    'F4-26-79-3A-1B-69': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SHREY
    '50-5A-65-F6-04-B7': 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo', //SHREY
    

    // Add more machine IDs and their associated API keys here
};

export default function handler(req, res) {
    // const api = 'AIzaSyCqfTBkRhGHZF62Kc8ROSWvxmutb_4Abvo'
    if (req.method === 'POST') {
        const { machine_id } = req.body;

        if (validMachineIds[machine_id]) {
            res.status(200).json({ api_key: validMachineIds[machine_id] });
            // res.status(200).json({ api_key: api });
        } else {
            res.status(401).json({ error: 'Failed to get verification key. Check Internet, license or contact us.', error_code: 401 });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
