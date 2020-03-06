import axios from 'axios'


export class EmpService {
  getUserAccount() {
    return axios.get("https://localhost:44338/api/Employee");
  }
  addUserData(data) {
    console.log("hgdg", data)
    return axios.post("https://localhost:44338/api/Employee", data)
  }
  deleteUserdata(id) {
    console.log("id in the service", id)
    return axios.delete("https://localhost:44338/api/Employee/" + id)
  }
  displayEmployee(id){
    console.log("id in the service",id)
    return axios.get("https://localhost:44338/api/Employee/"+id)
  }
  updateUserData(data){
    console.log("jygvyh", data)
    return axios.put("https://localhost:44338/api/Employee",data,
    {headers:{'Content-Type': 'application/json'}})
  }
}
