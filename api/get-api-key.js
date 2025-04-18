const API_KEY = 'AIzaSyDNabInwMSIUEOERJKal9_inhuaCykwwc0'; // Replace with your actual API key vibhav95y@gmail.com
const validMachineIds = new Set(['0C-54-15-93-EB-DA', //vibhav
                                 '00-41-0E-2B-A2-79',
                                 '10-68-38-0A-54-05', //Saji
                                 '10-6F-D9-32-D8-53', //SHREY
                                 'BC-6E-E2-BA-86-91',
                                 '90-0F-0C-80-47-0F',
                                 '50-5A-65-F6-C5-2B',
                                 'D0-C6-37-DB-34-63',
                                 'CC-47-40-2D-B2-EC',
                                 'CC-47-40-DE-CF-96',
                                 'A0-59-50-3A-02-96',
                                 'CC-47-40-2E-E3-AE',
                                 'B4-8C-9D-D3-42-83',
                                 'E4-0D-36-ED-E3-2E',
                                 '2C-3B-70-BA-5E-F7',
                                 '50-5A-65-C8-47-B7'
                                ]); // Initial machine IDs

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { machine_id } = req.body;

        if (machine_id) {
            if (validMachineIds.has(machine_id)) {
                res.status(200).json({ api_key: API_KEY });
                // res.status(200).json({ examdbms: true, api_key: API_KEY });
            } else {
                res.status(401).json({ error: 'Machine ID not recognized. Please contact support.', error_code: 401 });
            }
        } else {
            res.status(400).json({ error: 'Machine ID is required.', error_code: 400 });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
