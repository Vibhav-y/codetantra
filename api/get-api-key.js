const API_KEY = 'AIzaSyDNabInwMSIUEOERJKal9_inhuaCykwwc0'; // Replace with your actual API key vibhav95y@gmail.com
const validMachineIds = new Set(['0C-54-15-93-EB-DA', //vibhav
                                 '00-41-0E-2B-A2-79'
                                 '10-68-38-0A-54-05'
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
