var submit = document.getElementById("submit");

//Adds together all the numbers
document.getElementById("calculation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    if (Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3)) {
        var max = calculate_max(num1, num2, num3);
        var min = calculate_min(num1, num2, num3);

        report_max(max);
        report_min(min);
        report_mean(calculate_mean(num1, num2, num3));
        report_median(calculate_median(num1, num2, num3));
        report_range(calculate_range(max, min));
        report_mode(calculate_mode(num1, num2, num3));
    }
    else {
        window.alert("Not all inputs were numbers. Please try again.")
    }
});

var report_max = function(result) {
    document.getElementById("max").innerHTML = "Max: " + result;
}

var report_min = function(result) {
    document.getElementById("min").innerHTML = "Min: " + result;
}

var report_range = function(result) {
    document.getElementById("range").innerHTML = "Range: " + result;
}

var report_median = function(result) {
    document.getElementById("median").innerHTML = "Median: " + result;
}

var report_mean = function(result) {
    document.getElementById("mean").innerHTML = "Mean: " + result;
}

var report_mode = function(result) {
    document.getElementById("mode").innerHTML = "Mode: " + result;
}

function calculate_max(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function calculate_min(num1, num2, num3) {
    return Math.min(num1, num2, num3);
}

function calculate_range(max, min) {
    var range = max - min;
    return range;
}

function calculate_mean(num1, num2, num3) {
    var sum = num1 + num2 + num3;
    return (sum / 3);
}

function calculate_median(num1, num2, num3) {
    var num_array = [num1, num2, num3];
    var sorted_array = num_array.sort((a, b) => a - b);
    var mid = Math.floor(sorted_array.length / 2);

    if (sorted_array.length % 2 === 0) {
        return (sorted_array[mid - 1] + sorted_array[mid]) / 2;
    }
    else {
        return sorted_array[mid];
    }
}

function calculate_mode(num1, num2, num3) {
    const obj = {};
    var num_array = [num1, num2, num3];
    for (let i = 0; i < num_array.length; i ++) {
        if (!obj[num_array[i]]) {
            obj[num_array[i]] = 1;
        }
        else {
            obj[num_array[i]] += 1;
        }
    }

    let highest_value = 0;
    let highest_value_key = -Infinity;

    for (let key in obj) {
        const value = obj[key];
        if (value > highest_value) {
            highest_value = value;
            highest_value_key = key;
        }
    }
    return Number(highest_value_key);
}

