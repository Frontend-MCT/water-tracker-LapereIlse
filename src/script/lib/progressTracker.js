class ProgressTracker {
    constructor(options) {
        this.options = options;

        this.currentProgress = []; //dataAccess[this.options.mode].getProgressOfToday() || 0;
        this.timerId = null;

        this.percentageRatio = 100 / this.options.dailyGoal;

        this.percentage = document.querySelector(`.${this.options.domRefs.percentage}`);
        this.timeStampHolder = document.querySelector(`.${this.options.domRefs.timeStampHolder}`);
        this.addButton = document.querySelector(`.${this.options.domRefs.addButton}`);
        this.currentGoalHolders = document.querySelectorAll(`.${this.options.domRefs.currentGoal}`);
        this.currentUnitsHolders = document.querySelectorAll(`.${this.options.domRefs.currentUnits}`);

        this.showUserOptions();
        this.updateProgress();

        // const options = {
        //     units: 'ml',
        //     dailyGoal: 1539,
        //     mode:'local',
        //     domRefs: {
        //         percentage: 'js-amount',
        //         timeStampHolder: 'js-time-stamps',
        //         addButton: 'js-log',
        //         currentGoal: 'js-goal',
        //         currentUnits: 'js-units'
        //     },
        //     afterUpdate: function(newPercentage) {
        //         console.log('It has been updated!');
        //     }
        // };
    }

    updateProgress(newLogging = [null,900]) {
        this.currentProgress.push(newLogging);
        // this.showTimeStamp(newLogging[0]);
        const oldProgress = Number(this.percentage.innerText),
        // newLogging[1] => op positie 1 staat de progress
            newProgress = oldProgress + newLogging[1] * this.percentageRatio;
        
        console.log(newProgress);

        let v = oldProgress;
        this.timerId = setInterval(() => {
            this.percentage.innerHTML = v;
            if (v >= newProgress) {
                clearInterval(this.timerId);
            }
            v++;
        }, 16); // 1000ms / 60 frames = 16ms/frame
    }

    showUserOptions() {
        for (const g of this.currentGoalHolders) {
            g.innerHTML = this.options.dialyGoal;
        }

        for (const u of this.currentUnitsHolders) {
            u.innerHTML = this.options.units;
        }
    } 
}