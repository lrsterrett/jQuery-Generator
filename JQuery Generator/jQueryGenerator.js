const body = $("#divBodyWrap");
const go = $("#btnGo");
const input = $("#txbTableGenerator");

function createContainer() {
    $(".divContainer").remove();
    let container = $("<div>")
        .addClass("divContainer")
        .append($("<button>")
                    .text("Shade every other row")
                    .addClass("btnShading"),
                $("<button>")
                    .text("Show dark line every 10 rows")
                    .addClass("btnDarkLine"),
                $("<button>")
                    .text("Reset table")
                    .addClass("btnReset")
        );
    return container;
}

function createTable() {
    let numberOfRows = parseInt(input.val());
    if ( 0 < numberOfRows < 51) {    
        let table = $("<table>")
            .append($("<tr>")
                .append($("<th>").text(numberOfRows),
                        $("<th>").text("Programmer's Name?")
                )
            );
        for (let i = 0; i < numberOfRows; i++) {
            table.append($("<tr>")
                        .append($("<td>"),
                                $("<td>")
                        )
                    );
        }
    return table;
    }
}

go.on("click", () => {
    let container = createContainer();
    let table = createTable();
    body.append(container.append(table));
});

$("body").on("click", ".btnShading", () => {
    $("table").addClass("shade");
});

$("body").on("click", ".btnDarkLine", () => {
    $("table").addClass("darkLine");
});

$("body").on("click", ".btnReset", () => {
    $("table").removeClass("shade darkLine")
});

