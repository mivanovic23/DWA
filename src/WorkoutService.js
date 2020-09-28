import axios from 'axios';

const url = 'api/workouts/';

class WorkoutService {
    //GET

    static getWorkouts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map(workout => ({
                    ...workout,
                    createdAt: new Date(workout.createdAt)
                })));
            } catch(err){
                reject(err);
            }
        });
    }

    //CREATE
    static insertWorkout(naziv,text) {
        return axios.post(url, {
            naziv: naziv,
            text: text
        });
    }


    //DELETE
    static deleteWorkout(id) {
        return axios.delete (`${url}${id}`);
    }
}

export default WorkoutService;