
import axios from 'axios';


//you are not expected to understand this:
const handleError = (fn) => (...params) =>
fn(...params).catch((error) => {
  console.error(error);
});

export const api = {
  getTrip: handleError(async (id) => {
    const res = await axios.get(`${process.env.VUE_APP_ROOT_API}/trips/` + id);
    console.log(res.data)
    return res.data;
  }),
  getChecklist: handleError(async (id) => {
    const res = await axios.get(`${process.env.VUE_APP_ROOT_API}/checklists/` + id);
    return res.data;
  }),


};
