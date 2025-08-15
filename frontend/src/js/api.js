
export const createOpinion = async (data) => {
    const url = 'http://127.0.0.1:8000/opinions';
    const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    };
    const response = await fetch(url, config);
    if(response.ok){
        const data = await response.json();
        return data;
    }else{
        return {error: {stats: response.status, statusText: response.statusText}};
    }
}