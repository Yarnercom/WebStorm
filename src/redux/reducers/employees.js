


const initialState = {
    users: [
        {
            id: 1,
            name: "Erbol"
        },
        {
            id: 2,
            name: "Рыскул"
        },{
        company: 'it-run'
        }
    ]
};

export default (state = initialState, action) =>{
    switch (action.type) {
        default : return state
    }
}