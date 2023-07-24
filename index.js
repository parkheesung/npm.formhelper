const formHelper = async (targetID, callback) => {
    let result = await formHelperSync(targetID);
    if (callback !== null && callback !== undefined && typeof callback === "function") {
        callback(result);
    }
};

const formHelperSync = async (targetID) => {
    let result = {};
    let target = document.getElementById(targetID);
    if (target !== null) {
        // input type="radio" 또는 input type="checkbox" 요소들을 가져옴
        let radiosAndCheckboxes = target.querySelectorAll("input[type=radio], input[type=checkbox]");

        // input type="radio" 또는 input type="checkbox" 요소들을 제외한 다른 input 요소들을 가져옴
        let otherInputs = target.querySelectorAll("input[type=text], input[type=hidden],input[type=url], input[type=password],input[type=email], input[type=tel]");

        let selects = target.querySelectorAll("select");
        let texts = target.querySelectorAll("textarea");
        let name = null;
        let value = null;

        if (otherInputs !== null && otherInputs.length > 0) {
            for(let i = 0; i < otherInputs.length; i++) {
                if (otherInputs[i].hasAttribute("name")) {
                    name = otherInputs[i].getAttribute("name");
                    value = otherInputs[i].value;

                    if (name !== null && name !== undefined && value !== null && value !== undefined) {
                        if (result[name] !== null && result[name] !== undefined && String(result[name]) !== "") {
                          result[name] += "," + value;
                        } else {
                          result[name] = value;
                        }
                    }
                }
            }
        }

        if (radiosAndCheckboxes !== null && radiosAndCheckboxes.length > 0) {
            for(let i = 0; i < radiosAndCheckboxes.length; i++) {
                if (radiosAndCheckboxes[i].hasAttribute("name") && radiosAndCheckboxes[i].checked) {
                    name = radiosAndCheckboxes[i].getAttribute("name");
                    value = radiosAndCheckboxes[i].value;
                    if (name !== null && name !== undefined && value !== null && value !== undefined) {
                        if (result[name] !== null && result[name] !== undefined) {
                            result[name] += "," + value;
                        } else {
                            result[name] = value;
                        }
                    }
                }
            }
        }

        if (selects !== null && selects.length > 0) {
            for(let i = 0; i < selects.length; i++) {
                if (selects[i].hasAttribute("name")) {
                    name = selects[i].getAttribute("name");
                    value = selects[i].options[selects[i].selectedIndex].value;
                    if (name !== null && name !== undefined && value !== null && value !== undefined) {
                      if (result[name] !== null && result[name] !== undefined && String(result[name]) !== "") {
                          result[name] += "," + value;
                        } else {
                          result[name] = value;
                        }
                    }
                }
            }
        }

        if (texts !== null && texts.length > 0) {
            for(let i = 0; i < texts.length; i++) {
                if (texts[i].hasAttribute("name")) {
                    name = texts[i].getAttribute("name");
                    value = texts[i].value;
                    if (name !== null && name !== undefined && value !== null && value !== undefined) {
                      if (result[name] !== null && result[name] !== undefined && String(result[name]) !== "") {
                          result[name] += "," + value;
                        } else {
                          result[name] = value;
                        }
                    }
                }
            }
        }
    }

    return result;
};

exports.formHelper = formHelper;
exports.formHelperSync = formHelperSync;