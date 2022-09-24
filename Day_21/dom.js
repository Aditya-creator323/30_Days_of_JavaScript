// getting element by tagName
/*
const allTitle = document.getElementsByTagName('h1');

console.log(allTitle)

for(let i = 0;i<allTitle.length;i++){
    console.log(allTitle[i])
}
*/


// query selector :- 
// let firstTitle = document.querySelector('#first-title')





/*
function Quartersbetweentwodates(strArr){
    let size = strArr.length;
    let ans;
    let result = strArr.slice(5,7)
    let d = parseInt(result);

    if(d >= 1 && d <= 3){
        ans = strArr.slice(0,5);
        ans += '03';
        return ans;
    }
    else if(d >= 4 && d <= 6){
        ans = strArr.slice(0,5);
        ans += '06';
        return ans;
    }
    else if(d >= 7 && d <= 9){
        ans = strArr.slice(0,5);
        ans += '09';
        return ans;
    }

    ans = strArr.slice(0,5);
    ans += '12';
    return ans;
}

console.log(Quartersbetweentwodates("2020-05-01"));
*/
/*
function Quartersbetweentwodates(strArr){
    let resArr = [];
    let str1 = strArr[0];
    let str2 = strArr[1];
    let start_month = parseInt(str1.slice(5,7));
    let start_year = parseInt(str1.slice(0,4));
    let end_month = parseInt(str2.slice(5,7));
    let end_year = parseInt(str2.slice(0,4));
    let curr_year = parseInt(str1.slice(0,4))

    let ans;
    let total_months;
    if(start_year == end_year){
        total_months = end_month-start_month+1;
    }
    else{
        let year_gap = end_year - start_year - 1;
        total_months = (12-start_month+1) + end_month + year_gap*12;
    }
    console.log(total_months)

    if(start_month >= 1 && start_month <= 3){
        let quarter_month = 3;
        let text = curr_year.toString();
        ans = text + '-';
        let quarter_text = quarter_month.toString();
        if(quarter_text.length == 1){
            quarter_text = '0'+quarter_text;
        }
        ans += quarter_text;
        resArr.push(ans);
        total_months -= (3 - start_month + 1);

        while(total_months >= 0){
            if(quarter_month == 12){
                curr_year++;
                quarter_month = 3;
                text = curr_year.toString();
                ans = text + '-';
                quarter_text = quarter_month.toString();
                if(quarter_text.length == 1){
                    quarter_text = '0'+quarter_text;
                }
                ans += quarter_text;
                resArr.push(ans);
                total_months -= 3;
            }
            else{
                quarter_month += 3;
                quarter_text = quarter_month.toString();
                ans = text +'-'
                if(quarter_text.length == 1){
                    quarter_text = '0'+quarter_text;
                }
                ans += quarter_text;
                resArr.push(ans);
                total_months -= 3;
            }
        }

        return resArr;
    }
    else if(start_month >= 4 && start_month <= 6){
        let quarter_month = 6;
        let text = curr_year.toString();
        ans = text + '-';
        let quarter_text = quarter_month.toString();
        if(quarter_text.length == 1){
            quarter_text = '0'+quarter_text;
        }
        ans += quarter_text;
        resArr.push(ans);
        total_months -= (6 - start_month + 1);

        while(total_months >= 0){
            if(quarter_month == 12){
                curr_year++;
                quarter_month = 3;
                text = curr_year.toString();
                ans = text + '-';
                quarter_text = quarter_month.toString();
                if(quarter_text.length == 1){
                    quarter_text = '0'+quarter_text;
                }
                ans += quarter_text;
                resArr.push(ans);
                total_months -= 3;
            }
            else{
                quarter_month += 3;
                quarter_text = quarter_month.toString();
                ans = text +'-'
                if(quarter_text.length == 1){
                    quarter_text = '0'+quarter_text;
                }
                ans += quarter_text;
                resArr.push(ans);
                total_months -= 3;
            }
        }

        return resArr;
    }


    return resArr;
}


let strArr = ["2020-01-01","2020-12-31"];
console.log(Quartersbetweentwodates(strArr));
*/

