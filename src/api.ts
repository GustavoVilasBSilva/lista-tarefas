const BASE = 'https://chronos.compraqui.app'

export const api = {
    getAll: async () => {
        let response = await fetch(`${BASE}/api/tasks`);
        let json = await response.json();
        return json
    },
    addNew: async (title: string, description: string)=> {
        let response = await fetch(`${BASE}/api/tasks`, {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {'Content-Type': 'application/json'}
        });
        let json = await response.json()
        return json
    },
    deletTask: async (id:string) => {
            let response = await fetch(`${BASE}/api/tasks/${id}`, { method: 'DELETE' });
            return response
    },
    EditTask: async (id:string) => {
        let response = await fetch(`${BASE}/api/tasks/${id}`);
        let json = await response.json()
        return json
    },
    EditTaskUpdate:async (id:string, title:string, description:string, situation:string) => {
        let response = await fetch(`${BASE}/api/tasks/${id}`, {
            method: 'PUT',
            body: JSON.stringify({title, description, situation}),
            headers: { 'Content-Type': 'application/json','Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' }
        });
        return response   
    }
}