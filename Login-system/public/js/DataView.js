var userData=[];
$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "users/get-data",
        data: "{}",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        cache: false,
        success: function (data) {
            console.log(data);
            userData=data;
            for(let user of userData) {
                $("#data-table").append("<tr><td>" +user.name +"</td>"+"<td>" +user.email+ "</td>"+"<td>" +user.username+ "</td></tr>"); 
            }
        }
    });
});

