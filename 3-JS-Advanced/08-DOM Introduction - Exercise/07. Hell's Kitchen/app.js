function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let textAreaRef = document.querySelector('#inputs textarea');
   let bestRestaurant = document.querySelector("#bestRestaurant p");
   let bestWorkersRef = document.querySelector("#workers p");

   function onClick () {
      let data = textAreaRef.value;
      let restaurantData = JSON.parse(data);
      let result = {};
      
      for (let el of restaurantData) {
         let [name, workersData] = el.split(" - ");
         if (!result.hasOwnProperty(name)) {
            result[name] = {
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            }
         }

         let workerStrings = workersData.split(", ");
         let newWorkersList = createWorkersList(workerStrings);
         result[name].workers = concatWorkerList(result[name].workers, newWorkersList);
         let salaryData = calculateRestaurantData(result[name].workers);

         result[name].avgSalary = salaryData.avgSalary;
         result[name].bestSalary = salaryData.bestSalary;
      }

      let [bestName, bestData] = findBestRestaurant(result);
      
      bestRestaurant.textContent = `Name: ${bestName} Average Salary: ${bestData.avgSalary.toFixed(2)} Best Salary: ${bestData.bestSalary.toFixed(2)}`;

      let buff = "";

      bestData.workers.sort((a, b) => b.salary - a.salary)
      .forEach(worker => buff += `Name: ${worker.name} With Salary: ${worker.salary} `);

      bestWorkersRef.textContent = buff.trim();
   }

   function findBestRestaurant(restaurantData) {
      return Object.entries(restaurantData).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
   }

   function calculateRestaurantData(workerList) {
      let result = {
         avgSalary: 0,
         bestSalary: 0
      };

      let sum = 0;
      
      for (let worker of workerList) {
         let salary = worker.salary;
         sum += salary;
         if (salary > result.bestSalary) {
            result.bestSalary = salary;
         }
      }
      result.avgSalary = sum / workerList.length;
      return result;
   }

   function concatWorkerList(oldWorkers, newWorkers) {
      return oldWorkers.concat(newWorkers);
   }

   function createWorkersList(data) {
      let res = [];

      for (let el of data) {
         let [name, salary] =el.split(" ");
         salary = Number(salary);
         res.push({
            name,
            salary
         });
      }

      return res;
   }
}