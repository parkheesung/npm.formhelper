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
        let inputs = target.querySelectorAll("input");
        let selects = target.querySelectorAll("select");
        let texts = target.querySelectorAll("textarea");
        let name = null;
        let value = null;

        if (inputs !== null && inputs.length > 0) {
            for(let i = 0; i < inputs.length; i++) {
                if (inputs[i].hasAttribute("name")) {
                    name = inputs[i].getAttribute("name");
                    value = inputs[i].value;
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