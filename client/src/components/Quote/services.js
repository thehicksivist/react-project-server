import axios from 'axios';

export default async function () {
    let response = await axios.get('http://localhost:5000/services')
    return response
    //    return response.data.map(svc => svc.name)
}
