window.addEventListener("load", function () {

    let heartCount = 0;
    let clickValue = 1;
    let doubleCost = 50;
    let tripleCost = 100;
    let hunderedCost = 1000;
    let autoClickCost = 200;
    let superHeartCost = 500;
    let doublePurchased = 0;
    let triplePurchased = 0;
    let hunderedPurchased = 0;
    let autoPurchased = 0;
    let superPurchased = 0;
    let autoInterval = null;
    let autoClickSpeed = 2000;
    let superHeartChance = 0;
    let earnedReward = [];

    const displayHearts = document.getElementById("hearts");
    const displayClicks = document.getElementById("clickCounter");
    const displayUpgrades = document.getElementById("displayUpgrades");
    const mainHeart = document.getElementById("mainHeart");
    const doubleBtn = document.getElementById("doubleBtn");
    const tripleBtn = document.getElementById("tripleBtn");
    const hunderedBtn = document.getElementById("hunderedBtn");
    const autoClickBtn = document.getElementById("autoClickBtn");
    const superHeartBtn = document.getElementById("superHeartBtn");
    const displayDoubleCost = document.getElementById("doubleCost");
    const displayTripleCost = document.getElementById("tripleCost");
    const displayHunderedCost = document.getElementById("hunderedCost");
    const displayAutoClickCost = document.getElementById("autoClickCost");
    const displaySuperCost = document.getElementById("superCost");
    const badges = document.getElementById("badges");
    const alertNotification = document.getElementById("alert");
    const helpBtn = document.getElementById("helpBtn");
    const helpTxt = document.getElementById("helpTxt");

    /**
    * This function will update the scoreboard values that are shown on
    * the screen.
    * In the scoreboard it will display the current number of hearts, the
    * click value per click, and active upgrades.
    *
    * @returns {void} Does not return anything.
    */
    function updateView() {
        displayHearts.textContent = heartCount;
        displayClicks.textContent = clickValue;
        displayDoubleCost.textContent = doubleCost;
        displayTripleCost.textContent = tripleCost;
        displayHunderedCost.textContent=hunderedCost;
        displayAutoClickCost.textContent = autoClickCost;
        displaySuperCost.textContent = superHeartCost;

        let upgradesActive="";
        upgradesActive += "💙".repeat(doublePurchased);
        upgradesActive += "🌹".repeat(triplePurchased);
        upgradesActive += "🍫".repeat(hunderedPurchased);
        upgradesActive += "🩷".repeat(autoPurchased);
        upgradesActive += "🤍".repeat(superPurchased);

        displayUpgrades.textContent=upgradesActive || "None";
    }

    /**
    * Shows a notification message (that is temporary) to the user.
    * Shows which achievement/award they recieved.
    *
    * @param {String} message - The text of the message to display.
    * @returns {void} Doesn't return anything.
    */
    function showMessage(message) {
        alertNotification.textContent = message;
        alertNotification.style.display = "block";
        setTimeout(function () {
            alertNotification.style.display = "none";
        }, 3500);
    }

    /**
    * This function enables the functionality aspect of the autoclicker. 
    * It clicks the main heart at set specified interval. 
    * @returns {void} Does not return anything.
    */
    function startAutoClicker() {
        if (autoInterval != null) {
            clearInterval(autoInterval);
        }

        autoInterval = setInterval(function () {
            heartCount += clickValue;
            updateView();
            checkRewards();
        }, autoClickSpeed)
    }

    /**
    * This function handles clicking the main heart.
    * It increases the heart counter as well as total clicks.
    * It has the chance to trigger a "Super heart" which will give a user
    * 10,000 hearts if the condition specified is met.
    *
    * @returns {void} Doesn't return anything.
    */
    mainHeart.addEventListener("click", function () {
        heartCount += clickValue;

        if (Math.random() * 100 < superHeartChance) {
            heartCount += 10000;
            showMessage("SUPERHEART! +10,000 Hearts obtained!!!");
        }

        updateView();
        checkRewards();
    });

    /**
    * This function verifies if the user has earned any milestone
    * rewards.
    * It will add a badge to the rewards section if achieved.
    *
    * @returns {void} Doesn't return anything.
    */
    function checkRewards() {

        if (heartCount >= 100 && !earnedReward.includes(100)) {
            earnedReward.push(100);
            let badge = document.createElement("span");
            badge.textContent = " 💌 ";
            badges.appendChild(badge);
            showMessage("🎉(੭˃ᴗ˂)੭🎉 You earned: 💌");
        }

        if (heartCount >= 500 && !earnedReward.includes(500)) {
            earnedReward.push(500);
            let badge = document.createElement("span");
            badge.textContent = " 💐 ";
            badges.appendChild(badge);
            showMessage("🎉(੭˃ᴗ˂)੭🎉 You earned: 💐");
        }

        if (heartCount >= 1000 && !earnedReward.includes(1000)) {
            earnedReward.push(1000);
            let badge = document.createElement("span");
            badge.textContent = " 💋 ";
            badges.appendChild(badge);
            showMessage("🎉(੭˃ᴗ˂)੭🎉 You earned: 💋");
        }

        if (heartCount >= 10000 && !earnedReward.includes(10000)) {
            earnedReward.push(10000);
            let badge = document.createElement("span");
            badge.textContent = " 🧸 ";
            badges.appendChild(badge);
            showMessage("🎉(੭˃ᴗ˂)੭🎉 You earned: 🧸");
        }

        if (heartCount >= 50000 && !earnedReward.includes(50000)) {
            earnedReward.push(50000);
            let badge = document.createElement("span");
            badge.textContent = " 💍 ";
            badges.appendChild(badge);
            showMessage("🎉(੭˃ᴗ˂)੭🎉 You earned: 💍");
        }

    }

    /**
    * This function doubles the value assigned to clicking the main heart.
    * It verifies the user has more or equal hearts to the cost of the upgrade, then applies the click value
    * increase.
    * It also doubles the cost of the upgrade for the next purchase.
    * 
    * @returns {void} Does not return anything.
    */
    doubleBtn.addEventListener("click", function () {
        if (heartCount >= doubleCost) {
            heartCount -= doubleCost;
            clickValue *= 2;
            doubleCost *= 2;
            doublePurchased++;
            updateView();
        }
    });

    /**
    * This function triples the value assigned to clicking the main heart.
    * It verifies the user has more or equal hearts to the cost of the upgrade, then applies the click value
    * increase.
    * It also doubles the cost of the upgrade for the next purchase.
    *
    * @returns {void} Does not return anything.
    */
    tripleBtn.addEventListener("click", function () {
        if (heartCount >= tripleCost) {
            heartCount -= tripleCost;
            clickValue *= 3;
            tripleCost *= 2;
            triplePurchased++;
            updateView();
        }
    });

    /**
    * This function multiplies the value assigned to clicking the main heart by 100.
    * It verifies the user has more or equal hearts to the cost of the upgrade, then applies the click value
    * increase.
    * It also doubles the cost of the upgrade for the next purchase.
    *
    * @returns {void} Does not return anything.
    */
    hunderedBtn.addEventListener("click", function () {
        if (heartCount >= hunderedCost) {
            heartCount -= hunderedCost;
            clickValue *= 100;
            hunderedCost *= 2;
            hunderedPurchased++;
            updateView();
        }
    });

    /**
    * This function triggers the purchase of the autoclicker upgrade.
    * It will verify that the user has enough hearts to purchase it, then enable the autoclicker.
    * For subseqeunt purchases, the speed will increase by 1.5 and the cost will double.
    *
    * @returns {void} Does not return anything.
    */
    autoClickBtn.addEventListener("click", function () {

        if (heartCount >= autoClickCost) {
            heartCount -= autoClickCost;

            if (autoInterval === null) {
                startAutoClicker();
            } else {
                autoClickSpeed = Math.floor(autoClickSpeed / 1.5);
                if (autoClickSpeed < 50) autoClickSpeed = 50;
                startAutoClicker();
            }

            autoClickCost *= 2;
            autoPurchased++;
            updateView();
        }
    });

    
    /**
    * This function allows for the purchase of the "super heart" upgrade, it will add a 2% 
    * chance for the user to recieve a special heart giving 10,000 hearts per click.
    * It also verifies that the user has enough hearts to make this purchase.
    *
    * @returns {void} Does not return anything.
    */
    superHeartBtn.addEventListener("click", function () {

        if (heartCount >= superHeartCost) {
            heartCount -= superHeartCost;

            superHeartChance += 0.02;

            superHeartCost *= 2;
            superPurchased++;
            updateView();
        }

    });

    /**
    * This function toggles the display of information about the game and how to play it, 
    * as well as a summary of features.
    *
    * @returns {void} Does not return anything.
    */
    helpBtn.addEventListener("click", function () {
        if (helpTxt.style.display === "block") {
            helpTxt.style.display = "none";
        } else {
            helpTxt.style.display = "block";
        }
    });

});
