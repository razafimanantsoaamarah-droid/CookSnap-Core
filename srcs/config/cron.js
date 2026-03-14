import cron from 'node-cron';
import https from 'https';

const job = new cron.CronJob("*/14 * * * *", function() {
  https
  .get(process.env.API_URL, (res) => {
    if (res.statusCode === 200) {
      console.log("Cron job executed successfully");
    }
    console.log(`Status Code: ${res.statusCode}`);
  })
  .on("error", (e) => console.error(`Error executing cron job: ${e.message}`));
});

export default job;

// The cron job is scheduled to run every 14 minutes,*
// making a GET request 
// to the specified URL. If the request is 
// successful (status code 200), it logs a 
// success message. If there's an error 
// during the request,
//  it logs the error message.