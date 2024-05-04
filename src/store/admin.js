const state = {
  applications: [],
};

const mutations = {
    setApplications(state,data){
        state.applications = data;
    }
};

const actions ={
    getApplications({commit}){
        get_Applications()
        .then((response) =>{
            console.log(response)
        })
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
}
