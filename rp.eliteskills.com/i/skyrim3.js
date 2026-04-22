// Code (c) Jimmy Ruska

// function add() 
// function add_all() 
// function add_filter() 
// function add_hover_effects() 
// function add_item(a) 
// function add_item_filter(a, b) 
// function arr2str(a) 
// function build_effects() 
// function delete_rare() 
// function each_index(a, b) 
// function exclude() 
// function filter(a, b, c) 
// function find(a, b) 
// function find_matches2() 
// function hover_effect() 
// function hover_ingredients() 
// function ingredient_options(a) 
// function intersect() 
// function key_find(a, b, c) 
// function make(a) 
// function take(a, b) 
// function member(a, b) 
// function money_sort(a, b) 
// function multiplier(a, b, c, d) 
// function refresh(a) 
// function refresh1(a) 
// function remove_have(a) 
// function remove_item(a) 
// function remove_item_wo(a) 
// function remove_rare(a) 
// function upper_first(a) 
// function worth(a, b) 

var __delete = "i/delete.png",
    __additem = "i/plus.png",
    __sadd = "i/script_add.png",
    __sdelete = "i/script_delete.png",
    __first_run = !0,
    __filters = [],
    __matches = [], // 20350
    __have = [],
    __exclude = [],
    __effects = [
        ["Cure Disease", 21, 1],
        ["Damage Health", 3, 0],
        ["Damage Magicka", 52, 0],
        ["Damage Magicka Regen", 265, 0],
        ["Damage Stamina", 43, 0],
        ["Damage Stamina Regen", 159, 0],
        ["Fear", 120, 0],
        ["Fortify Alteration", 47, 1],
        ["Fortify Barter", 48, 1],
        ["Fortify Block", 118, 1],
        ["Fortify Carry Weight", 208, 1],
        ["Fortify Conjuration", 75, 1],
        ["Fortify Destruction", 151, 1],
        ["Fortify Enchanting", 14, 1],
        ["Fortify Health", 82, 1],
        ["Fortify Heavy Armor", 55, 1],
        ["Fortify Illusion", 94, 1],
        ["Fortify Light Armor", 55, 1],
        ["Fortify Lockpicking", 25, 1],
        ["Fortify Magicka", 71, 1],
        ["Fortify Marksman", 118, 1],
        ["Fortify One Handed", 118, 1],
        ["Fortify Pickpocket", 118, 1],
        ["Fortify Restoration", 118, 1],
        ["Fortify Smithing", 82, 1],
        ["Fortify Sneak", 118, 1],
        ["Fortify Stamina", 71, 1],
        ["Fortify Two Handed", 118, 1],
        ["Frenzy", 107, 0],
        ["Invisibility", 261, 1],
        ["Lingering Damage Health", 86, 0],
        ["Lingering Damage Magicka", 71, 0],
        ["Lingering Damage Stamina", 12, 0],
        ["Paralysis", 285, 0],
        ["Ravage Health", 6, 0],
        ["Ravage Magicka", 15, 0],
        ["Ravage Stamina", 24, 0],
        ["Regenerate Health", 177, 1],
        ["Regenerate Magicka", 177, 1],
        ["Regenerate Stamina", 177, 1],
        ["Resist Fire", 86, 1],
        ["Resist Frost", 86, 1],
        ["Resist Magic", 51, 1],
        ["Resist Poison", 118, 1],
        ["Resist Shock", 86, 1],
        ["Restore Health", 21, 1],
        ["Restore Magicka", 25, 1],
        ["Restore Stamina", 25, 1],
        ["Slow", 247, 0],
        ["Waterbreathing", 100, 1],
        ["Weakness to Fire", 48, 0],
        ["Weakness to Frost", 40, 0],
        ["Weakness to Magic", 51, 0],
        ["Weakness to Poison", 51, 0],
        ["Weakness to Shock", 56, 0]
    ],
    __all = [
        ["abecean longfin", [51, 25, 53, 23]],
        ["bear claws", [47, 14, 21, 3]],
        ["bee", [47, 36, 39, 54]],
        ["beehive husk", [43, 17, 25, 12]],
        ["bleeding crown", [50, 9, 53, 42]],
        ["blisterwort", [4, 28, 45, 24]],
        ["blue butterfly wing", [4, 11, 3, 13]],
        ["blue dartwing", [44, 22, 45, 6]],
        ["blue mountain flower", [45, 11, 14, 3]],
        ["bone meal", [4, 40, 11, 36]],
        ["briar heart", [46, 9, 33, 19]],
        ["butterfly wing", [45, 8, 32, 2]],
        ["canis root", [4, 21, 20, 33]],
        ["charred skeever hide", [47, 0, 43, 45]],
        ["chaurus eggs", [53, 26, 2, 29]],
        ["chicken's egg", [42, 3, 49, 32]],
        ["creep cluster", [46, 5, 10, 52]],
        ["crimson nirnroot", [1, 4, 29, 42]],
        ["cyrodilic spadetail", [4, 23, 6, 34]],
        ["daedra heart", [45, 5, 2, 6]],
        ["deathbell", [1, 36, 48, 53]],
        ["dragon's tongue", [40, 8, 16, 27]],
        ["dwarven oil", [52, 16, 38, 46]],
        ["ectoplasm", [46, 12, 19, 1]],
        ["elves ear", [46, 20, 51, 40]],
        ["eye of sabre cat", [47, 34, 2, 45]],
        ["falmer ear", [1, 28, 43, 18]],
        ["fire salts", [51, 40, 46, 38]],
        ["fly amanita", [40, 27, 28, 39]],
        ["frost mirriam", [41, 25, 35, 5]],
        ["frost salts", [50, 41, 46, 11]],
        ["garlic", [43, 26, 38, 37]],
        ["giant lichen", [54, 34, 53, 46]],
        ["giant's toe", [4, 14, 10, 5]],
        ["glow dust", [2, 3, 12, 44]],
        ["glowing mushroom", [44, 12, 24, 14]],
        ["grass pod", [43, 35, 7, 46]],
        ["hagraven claw", [42, 31, 13, 8]],
        ["hagraven feathers", [2, 11, 28, 54]],
        ["hanging moss", [2, 14, 3, 21]],
        ["hawk beak", [47, 41, 10, 44]],
        ["hawk feathers", [0, 17, 21, 25]],
        ["histcarp", [47, 19, 5, 49]],
        ["honeycomb", [47, 9, 17, 36]],
        ["human flesh", [1, 33, 46, 25]],
        ["human heart", [1, 2, 3, 28]],
        ["ice wraith teeth", [51, 15, 29, 50]],
        ["imp stool", [1, 30, 33, 45]],
        ["jazbay grapes", [52, 19, 38, 34]],
        ["juniper berries", [50, 20, 37, 5]],
        ["large antlers", [47, 26, 48, 5]],
        ["lavender", [42, 26, 35, 11]],
        ["luna moth wing", [2, 17, 37, 29]],
        ["moon sugar", [50, 41, 46, 38]],
        ["mora tapinella", [46, 30, 39, 16]],
        ["mudcrab chitin", [47, 0, 43, 40]],
        ["namira's rot", [2, 18, 6, 37]],
        ["nightshade", [1, 3, 32, 12]],
        ["nirnroot", [1, 4, 29, 42]],
        ["nordic barnacle", [2, 49, 37, 22]],
        ["orange dartwing", [47, 35, 22, 30]],
        ["pearl", [47, 9, 46, 44]],
        ["pine thrush egg", [47, 18, 53, 44]],
        ["powdered mammoth tusk", [47, 25, 50, 6]],
        ["purple mountain flower", [47, 25, 31, 41]],
        ["red mountain flower", [46, 35, 19, 1]],
        ["river betty", [1, 7, 48, 10]],
        ["rock warbler egg", [45, 21, 4, 52]],
        ["sabre cat tooth", [47, 15, 24, 53]],
        ["salt pile", [52, 23, 48, 38]],
        ["scaly pholiota", [52, 16, 39, 10]],
        ["silverside perch", [47, 5, 34, 41]],
        ["skeever tail", [5, 34, 1, 17]],
        ["slaughterfish egg", [43, 22, 30, 26]],
        ["slaughterfish scales", [41, 30, 15, 9]],
        ["small antlers", [53, 23, 32, 1]],
        ["small pearl", [47, 21, 23, 41]],
        ["snowberries", [40, 13, 41, 44]],
        ["spider egg", [4, 3, 18, 20]],
        ["spriggan sap", [3, 13, 24, 7]],
        ["swamp fungal pod", [44, 31, 33, 45]],
        ["taproot", [52, 16, 38, 46]],
        ["thistle branch", [41, 36, 43, 15]],
        ["torchbug thorax", [47, 31, 52, 26]],
        ["troll fat", [43, 27, 28, 1]],
        ["tundra cotton", [42, 19, 9, 8]],
        ["vampire dust", [29, 46, 37, 0]],
        ["void salts", [54, 42, 1, 19]],
        ["wheat", [45, 14, 5, 31]],
        ["white cap", [51, 15, 46, 35]],
        ["wisp wrappings", [47, 12, 10, 42]],
        ["berit's ashes", [4, 40, 11, 36]],
        ["jarrin root", [1, 2, 4, 3]]
    ],
    __rel_ingredient = each_index(0, __all),
    __rel_effect_list = each_index(1, __all),
    __rel_effect = each_index(0, __effects),
    __rel_worth = each_index(1, __effects),
    __rel_affinity = each_index(2, __effects);

function each_index(a, b) {
    for (var c = [], d = 0, f = b.length; d < f; d++) c[d] = b[d][a];
    return c
}

$(document).ready(function() {
    $("#autocomplete").autocomplete({
        source: take(function(a) {
            return a[0]
        }, __all),
        delay: 0,
        autofocus: !0
    });
    $(":radio").change(function() {
        refresh(!1)
    });
    $("#three:checkbox").change(function() {
        refresh(!0)
    });
    $.each($(":button"), function(a, b) {
        $(b).button()
    });
    for (var i = 0; i < __effects.length; i++) {
        $("#effects").append('<option value="' + i + '">' + __effects[i][0] + '</option>');
    }
    build_effects2();
    __exclude = _.range(93);
});

function add_filter() {
    var a = !!parseInt($("#filter").val(), 10),
        b = parseInt($("#effects").val(), 10);
    __filters.push([(a ? "Has " : "Does not have ") + __rel_effect[b], function(c) {
        return member(b, c) !== a
    }]);
    return !1
}

function add_item_filter(a, b) {
    __filters.push([(b ? "Has " : "Does not have ") + __rel_ingredient[a], function(c, d) {
        return member(a, d) !== b
    }]);
    return refresh(!1)
}

function build_effects2() {
    var i = 0,
        render = templayed('<span class="effect c{{color}}" data-id="{{index}}">{{name}} (${{value}})</span><br>');
    $("#listeffects").html(_.map(__effects, function(a) {
        return render(_.object(['index', 'name', 'value', 'color'], [i++].concat(a)))
    }).join(""));
    $(".effect").tooltip({
        bodyHandler: hover_effect,
        delay: 200
    })
}

function build_effects() {
    for (var a = "", b = 0, c = __effects.length; b < c; b++) var d = __effects[b],
        a = a + ("<span class='effect' data-id='" + b + "' style='font-weight:bold;color:" + (1 === d[2] ? "green" : "red") + "'>" + d[0] + " ($" + d[1] + ")</span><br/>");
    $("#listeffects").html(a);
    $(".effect").tooltip({
        bodyHandler: hover_effect,
        delay: 200
    })
}

function hover_effect() {
    for (var a = parseInt($(this).attr("data-id"), 10), b = "<b>Effect Worth:</b> " + __rel_worth[a] + "<br/><b>Ingredients With Effect:</b><br/>", c = [], d = 0, f = __all.length; d < f; d++) member(a, __rel_effect_list[d]) && c.push(__rel_ingredient[d]);
    return b += c.sort().join("<br/>")
}

function hover_ingredients() {
    var a = parseInt($(this).attr("data-name"), 10);
    if (1E3 === a) return "";
    for (var a = __rel_effect_list[a].sort(), b = "", c = 0, d = 0, f = a.length; d < f; d++) var h = __effects[a[d]],
        k = h[0],
        e = h[1],
        h = h[2],
        c = c + e,
        b = b + ("<span style='font-weight:bold;color:" + (1 === h ? "green" : "red") + "'>" + k + " ($" + e + ")</span><br/>");
    return b = b + ("<br/><b>Combined Worth:</b> $" + c + "<br/>") + ("<b>Average Worth:</b> $" + Math.round(c / 4))
}

function ingredient_options(a) {
    return void 0 === a ? "" : "<br/><br/><a href='#' onclick='remove_have(" + a + "); return remove_item(" + a + ");'><img src='" + __delete + "'/></a>&nbsp;&nbsp; <a href='#' onclick='return add_item_filter(" + a + ",true);'><img src='" + __sadd + "'/></a>&nbsp;&nbsp; <a href='#' onclick='return add_item_filter(" + a + ",false);'><img src='" + __sdelete + "'/></a>"
}

function add_hover_effects() {
    $("#xyz .effect").tooltip({
        bodyHandler: hover_effect,
        delay: 200
    });
    $("#xyz .ingredient").tooltip({
        bodyHandler: hover_ingredients,
        delay: 200
    })
}

function refresh(a) {
    __first_run && ($("#listeffects").css("visibility", "visible"), $("#vid").remove(), __first_run = !1);
    document.getElementById("results").innerHTML = "";
    $("#warn").html("Generating all possible recipes, this may take a few seconds...<br/><br/>");
    setTimeout("refresh1(" + (a ? "true" : "false") + ");", 20);
    return !1
}

function refresh1(a) {
    var b = $("#pure").prop("checked"),
        c = $("#positive").prop("checked"),
        d = $("#negative").prop("checked"),
        f = $("#three").prop("checked"),
        h = parseInt($("#max_results").val(), 10),
        k = "<div id='ingredients' style='border:1px solid #ccc;padding-left:5px;width:260'><h4 style='margin:0;padding:0'>Your Ingredients: Icon Legend</h4><br/><img src='" + __delete + "'/> = I don't have this <br/><img src='" + __sadd + "'/> = Show recipes that have this<br/><img src='" + __sdelete + "'/> = Exclude recipes that have this<br/><hr/><div style='line-height:30px'>";
    __have.sort(function(a, b) {
        return a - b
    });
    for (var e = 0, m = __have.length; e < m; e++) k += "<a href='#' onclick='__have.splice(" + e + ",1); return remove_item(" + __have[e] + ");'><img src='" + __delete + "'/></a>&nbsp;&nbsp; <a href='#' onclick='return add_item_filter(" + __have[e] + ",true)'><img src='" + __sadd + "'/></a>&nbsp;&nbsp; <a href='#' onclick='return add_item_filter(" + __have[e] + ",false)'><img src='" + __sdelete + "'/></a>&nbsp;&nbsp; <span class='ingredient' data-name='" + __have[e] + "'>" + upper_first(__rel_ingredient[__have[e]]) + "</span><br/>";
    document.getElementById("added").innerHTML = k + exclude() + "</div></div>";
    $("#ingredients .ingredient").tooltip({
        bodyHandler: hover_ingredients,
        delay: 200
    });
    if (0 === __have.length) return document.getElementById("results").innerHTML = "<br/>No ingredients selected.", $("#controls").css("visibility", "hidden"), $("#warn").html(""), !1;
    ///////////////////////////////////////////
    a && (__matches = find_matches2());
    ///////////////////////////////////////////
    if (0 === __matches.length) return document.getElementById("results").innerHTML = "<br/>No recipes found. Add more ingredients.", $("#controls").css("visibility", "hidden"), $("#warn").html(""), !1;
    e = "";
    a = 0;
    for (m = __filters.length; a < m; a++) e += "<a href='#' onclick='__filters.splice(" + a + ",1); return refresh(false);'><img src='" + __delete + "'/></a> " + __filters[a][0] + ", ";
    0 < a && (e = e.substring(0, e.length - 2) + "<br/>");
    a = "<br/>" + e + "<br/><table id='xyz' cellpadding='3' cellspacing='0' border='1'><thead><tr><th>Profit</th><th>Ingredient 1</th><th>Ingredient 2</th><th>Ingredient 3</th><th>Effects</th></tr></thead><tbody>";
    e = k = 0;
    for (m = __matches.length; e < m; e++) {
        var j = __matches[e];
        if (void 0 !== j) {
            var n = j[1],
                g = j[0];
            if (!(0 < __filters.length && filter(__filters, n, g)) && (3 !== g.length || f)) {
                for (var q = 3 === g.length ? __rel_ingredient[g[2]] : "none", j = j[2], l = "", i = null, o = 0, p = n.length; o < p; o++) {
                    var r = __effects[n[o]];
                    null === i ? i = r[2] : !1 !== i && i !== r[2] && (i = !1);
                    l += "<span class='effect' data-id='" + n[o] + "' style='font-weight:bold;color:" + (1 === r[2] ? "green" : "red") + "'>" + r[0] + "</span><br/>"
                }
                if (!(b && !1 === i) && !(c && 1 !== i) && !(d && 0 !== i)) {
                    if (h === k++) {
                        a += "<tr><td colspan='5'>Limiting to " + h + " table rows. Please add filters to avoid slow rendering.</td></tr>";
                        break
                    }
                    a += "<tr><td>$" + j + "</td><td><span data-name='" + g[0] + "' class='ingredient'>" + __rel_ingredient[g[0]] + "</span>" + ingredient_options(g[0]) + "</td><td><span data-name='" + g[1] + "' class='ingredient'>" + __rel_ingredient[g[1]] + "</span>" + ingredient_options(g[1]) + "</td><td><span data-name='" + (3 === g.length ? g[2] : 1E3) + "' class='ingredient'>" + q + "</span>" + ingredient_options(g[2]) + "</td><td>" + l + "</td></tr>"
                }
            }
        }
    }
    document.getElementById("results").innerHTML = a + "</tbody></table><br/><br/><br/>";
    $("#warn").html("");
    $("#controls").css("visibility", "visible");
    setTimeout("add_hover_effects()", 20);
    return !1
}

function upper_first(a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
};

function filter(a, b, c) {
    for (var d = 0, f = a.length; d < f; d++)
        if (fun = a[d][1], fun(b, c)) return !0;
    return !1
}

function find_matches2() {
    var b = [],
        t = $("#three").prop("checked"),
        h = __have.length;
    for (i = 0; i < h - 1; i++)
        for (j = i + 1; j < h; j++) {
            var i0 = __have[i],
                e0 = __all[i0][1],
                i1 = __have[j],
                e1 = __all[i1][1],
                c2 = intersect(e0, e1);
            if (c2.length > 0)
                b.push([
                    [i0, i1], c2, worth(c2, [i0, i1])
                ]);

            if (t)
                for (k = j + 1; k < h; k++) {
                    var i2 = __have[k],
                        e2 = __all[i2][1],
                        c3 = intersect(e0, e1, e2);
                    if (c3.length > c2.length && c3.length > intersect(e0, e2).length && c3.length > intersect(e1, e2).length)
                        b.push([
                            [i0, i1, i2], c3, worth(c3, [i0, i1, i2])
                        ]);
                }
        }
    b.sort(money_sort);
    return b
}

function intersect() {
    var a = Array.prototype.concat.apply(this, arguments);
    a.shift();
    a.sort();
    for (var b = [], c, d = 0, f = a.length; d < f; d++)
        if (c = a[d], c === a[d + 1])
            for (b.push(c); c === a[++d + 1];);
    return b
}

function worth(a, b) {
    for (var c = 0, d = 0, f = a.length; d < f; d++) c += __rel_worth[a[d]];
    member(33, b) && (c += multiplier(14, 6, 82, a));
    member(17, b) && (c += multiplier(4, 906 / 269, 43, a));
    if (member(1, a))
        for (d in f = [
                [92, 193.67],
                [66, 791 / 23],
                [58, 291 / 23],
                [17, 76 / 23],
                [20, 35 / 23]
            ], f) {
            var h = multiplier(f[d][0], f[d][1], 3, b);
            if (0 < h) {
                c += h;
                break
            }
        }
    return c
}

function multiplier(a, b, c, d) {
    return !1 !== find(a, d) ? Math.ceil(c * b) - c : 0
}

function money_sort(a, b) {
    return b[2] - a[2]
}

function member(a, b) {
    for (var c = 0, d = b.length; c < d; c++)
        if (a === b[c]) return !0;
    return !1
}

function take(a, b) {
    for (var c = [], d = 0, f = b.length; d < f; d++) c[d] = a(b[d]);
    return c
}

function key_find(a, b, c) {
    for (var d = 0, f = c.length; d < f; d++)
        if (c[d][a] === b) return d;
    return !1
}

function find(a, b) {
    for (var c = 0, d = b.length; c < d; c++)
        if (b[c] === a) return c;
    return !1
}

function remove_item(a) {
    __exclude.push(a);
    for (var b = 0, c = __matches.length; b < c; b++) void 0 !== __matches[b] && member(a, __matches[b][0]) && delete __matches[b];
    return refresh(!1)
}

function remove_item_wo(a) {
    for (var b = 0, c = __matches.length; b < c; b++) void 0 !== __matches[b] && member(a, __matches[b][0]) && delete __matches[b];
}

function remove_have(a) {
    for (var b = 0, c = __have.length; b < c; b++) a === __have[b] && __have.splice(b, 1)
}

function remove_rare(a) {
    for (var b = 0, c = __exclude.length; b < c; b++) a === __exclude[b] && __exclude.splice(b, 1)
}

function make(a) {
    for (var b = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = __all[a[c]];
    return b
}

function add() {
    var a = document.getElementById("autocomplete").value.toLowerCase(),
        a = find(a, __rel_ingredient);
    if (!1 === a || member(a, __have)) return !1;
    remove_rare(a);
    __have.push(a);
    setTimeout("refresh(true);", 20);
    $("#autocomplete").val("");
    return !1
}

function add_all() { // old way - remove gen() & change refresh(true);
    __have = [];
    for (var i = 0, len = __all.length; i < len; i++) __have.push(i);
    gen();
    delete_rare();
    return refresh(false);
}

function add_item(a) { // refresh(true) rebuilds __matches after __have.push() (sync)
    if (!member(a, __have)) {
        __have.push(a);
        remove_rare(a);
        refresh(true);
    }
}

function delete_rare() {
    __exclude = [10, 17, 19, 27, 30, 44, 45, 53, 63, 79, 87, 91, 92];
    for (i = 0; i < __exclude.length; i++) {
        remove_have(__exclude[i]);
        remove_item_wo(__exclude[i]);
    }
}

function exclude() {
    __exclude.sort(function(a, b) {
        return a - b
    });
    var e = "<hr/><h4 style='margin:0;padding:0'>Rare Ingredients Excluded</h4>";
    for (i = 0; i < __exclude.length; i++)
        e += '<a href="#" onclick="add_item(' + __exclude[i] + ');" ><img src="' + __additem + '"/></a>&nbsp;&nbsp;' +
        '<span class="ingredient" data-name="' + __exclude[i] + '">' + upper_first(__rel_ingredient[__exclude[i]]) + '</span><br/>';
    return e
}

function arr2str(a) {
    for (var b = "[", c = 0, d = a.length; c < d; c++) b += a[c] + ",";
    return b.substr(0, b.length - 1) + "]"
}
