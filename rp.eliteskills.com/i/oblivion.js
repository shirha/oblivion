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
// function map(a, b) 
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

var __delete  = "i/delete.png",
    __additem = "i/plus.png",
    __sadd    = "i/script_add.png",
    __sdelete = "i/script_delete.png",
    __first_run = !0,
    __filters = [],
    __matches = [], // 20350
    __have = [],
    __exclude = [],
    __effects = [
  [
    "Burden",
    43,
    1
  ],
  [
    "Chameleon",
    43,
    0
  ],
  [
    "Cure Disease",
    43,
    0
  ],
  [
    "Cure Paralysis",
    43,
    0
  ],
  [
    "Cure Poison",
    43,
    0
  ],
  [
    "Damage Agility",
    43,
    1
  ],
  [
    "Damage Endurance",
    43,
    1
  ],
  [
    "Damage Fatigue",
    43,
    1
  ],
  [
    "Damage Health",
    43,
    1
  ],
  [
    "Damage Intelligence",
    43,
    1
  ],
  [
    "Damage Luck",
    43,
    1
  ],
  [
    "Damage Magicka",
    43,
    1
  ],
  [
    "Damage Personality",
    43,
    1
  ],
  [
    "Damage Speed",
    43,
    1
  ],
  [
    "Damage Strength",
    43,
    1
  ],
  [
    "Damage Willpower",
    43,
    1
  ],
  [
    "Detect Life",
    43,
    0
  ],
  [
    "Dispel",
    43,
    0
  ],
  [
    "Drain Fatigue",
    43,
    1
  ],
  [
    "Drain Health",
    43,
    1
  ],
  [
    "Feather",
    43,
    0
  ],
  [
    "Fire Damage",
    43,
    1
  ],
  [
    "Fire Shield",
    43,
    0
  ],
  [
    "Fortify Agility",
    43,
    0
  ],
  [
    "Fortify Endurance",
    43,
    0
  ],
  [
    "Fortify Fatigue",
    43,
    0
  ],
  [
    "Fortify Health",
    43,
    0
  ],
  [
    "Fortify Intelligence",
    43,
    0
  ],
  [
    "Fortify Luck",
    43,
    0
  ],
  [
    "Fortify Magicka",
    43,
    0
  ],
  [
    "Fortify Personality",
    43,
    0
  ],
  [
    "Fortify Speed",
    43,
    0
  ],
  [
    "Fortify Strength",
    43,
    0
  ],
  [
    "Fortify Willpower",
    43,
    0
  ],
  [
    "Frost Damage",
    43,
    1
  ],
  [
    "Frost Shield",
    43,
    0
  ],
  [
    "Invisibility",
    43,
    0
  ],
  [
    "Light",
    43,
    0
  ],
  [
    "Night-Eye",
    43,
    0
  ],
  [
    "Paralyze",
    43,
    1
  ],
  [
    "Reflect Damage",
    43,
    0
  ],
  [
    "Reflect Spell",
    43,
    0
  ],
  [
    "Resist Disease",
    43,
    0
  ],
  [
    "Resist Fire",
    43,
    0
  ],
  [
    "Resist Frost",
    43,
    0
  ],
  [
    "Resist Paralysis",
    43,
    0
  ],
  [
    "Resist Poison",
    43,
    0
  ],
  [
    "Resist Shock",
    43,
    0
  ],
  [
    "Restore Agility",
    43,
    0
  ],
  [
    "Restore Endurance",
    43,
    0
  ],
  [
    "Restore Fatigue",
    43,
    0
  ],
  [
    "Restore Health",
    43,
    0
  ],
  [
    "Restore Intelligence",
    43,
    0
  ],
  [
    "Restore Luck",
    43,
    0
  ],
  [
    "Restore Magicka",
    43,
    0
  ],
  [
    "Restore Personality",
    43,
    0
  ],
  [
    "Restore Speed",
    43,
    0
  ],
  [
    "Restore Strength",
    43,
    0
  ],
  [
    "Restore Willpower",
    43,
    0
  ],
  [
    "Shield",
    43,
    0
  ],
  [
    "Shock Damage",
    43,
    1
  ],
  [
    "Shock Shield",
    43,
    0
  ],
  [
    "Silence",
    43,
    1
  ],
  [
    "Water Breathing",
    43,
    0
  ],
  [
    "Water Walking",
    43,
    0
  ]
],
    __all = [
  [
    "Alkanet Flower",
    [
      52,
      46,
      37,
      7
    ],
    5,
    0
  ],
  [
    "Alocasia Fruit",
    [
      50,
      37,
      51,
      11
    ],
    4,
    1
  ],
  [
    "Aloe Vera Leaves",
    [
      50,
      51,
      11,
      36
    ],
    2,
    0
  ],
  [
    "Apple",
    [
      50,
      10,
      33,
      8
    ],
    5,
    0
  ],
  [
    "Arrowroot",
    [
      48,
      10,
      32,
      0
    ],
    3,
    0
  ],
  [
    "Aster Bloom Core",
    [
      48,
      17,
      59,
      0
    ],
    3,
    1
  ],
  [
    "Bergamot Seeds",
    [
      42,
      17,
      11,
      62
    ],
    5,
    0
  ],
  [
    "Black Tar",
    [
      7,
      13,
      8,
      60
    ],
    5,
    1
  ],
  [
    "Blackberry",
    [
      50,
      47,
      24,
      54
    ],
    4,
    0
  ],
  [
    "Blister Pod Cap",
    [
      54,
      29,
      38,
      36
    ],
    4,
    1
  ],
  [
    "Bloodgrass",
    [
      1,
      45,
      0,
      26
    ],
    4,
    0
  ],
  [
    "Boar Meat",
    [
      51,
      13,
      26,
      0
    ],
    2,
    0
  ],
  [
    "Bog Beacon Asco Cap",
    [
      54,
      59,
      12,
      6
    ],
    3,
    0
  ],
  [
    "Bone Marrow",
    [
      8,
      34,
      11,
      39
    ],
    2,
    1
  ],
  [
    "Bone Shard",
    [
      58,
      35,
      11,
      10
    ],
    2,
    1
  ],
  [
    "Bonemeal",
    [
      7,
      43,
      28,
      38
    ],
    4,
    0
  ],
  [
    "Bread Loaf",
    [
      50,
      16,
      5,
      14
    ],
    5,
    0
  ],
  [
    "Cairn Bolete Cap",
    [
      51,
      9,
      45,
      60
    ],
    4,
    0
  ],
  [
    "Carrot",
    [
      50,
      38,
      27,
      6
    ],
    4,
    0
  ],
  [
    "Cheese Wedge",
    [
      50,
      43,
      22,
      5
    ],
    5,
    0
  ],
  [
    "Clannfear Claws",
    [
      2,
      42,
      39,
      8
    ],
    2,
    0
  ],
  [
    "Clouded Funnel Cap",
    [
      52,
      27,
      6,
      11
    ],
    5,
    0
  ],
  [
    "Columbine Root Pulp",
    [
      55,
      44,
      29,
      1
    ],
    5,
    0
  ],
  [
    "Congealed Putrescence",
    [
      57,
      21,
      54,
      8
    ],
    3,
    1
  ],
  [
    "Corn",
    [
      50,
      52,
      5,
      61
    ],
    5,
    0
  ],
  [
    "Crab Meat",
    [
      49,
      47,
      7,
      22
    ],
    4,
    0
  ],
  [
    "Daedra Heart",
    [
      51,
      61,
      11,
      62
    ],
    3,
    0
  ],
  [
    "Daedra Silk",
    [
      0,
      38,
      1,
      6
    ],
    2,
    0
  ],
  [
    "Daedra Venin",
    [
      39,
      50,
      8,
      40
    ],
    2,
    0
  ],
  [
    "Daedroth Teeth",
    [
      38,
      35,
      0,
      37
    ],
    2,
    0
  ],
  [
    "Dragon's Tongue",
    [
      43,
      8,
      51,
      22
    ],
    2,
    0
  ],
  [
    "Dreugh Wax",
    [
      7,
      46,
      63,
      8
    ],
    2,
    0
  ],
  [
    "Ectoplasm",
    [
      60,
      17,
      29,
      8
    ],
    3,
    0
  ],
  [
    "Elytra Ichor",
    [
      54,
      0,
      1,
      62
    ],
    3,
    1
  ],
  [
    "Fennel Seeds",
    [
      50,
      9,
      11,
      39
    ],
    2,
    0
  ],
  [
    "Fire Salts",
    [
      21,
      44,
      54,
      22
    ],
    2,
    0
  ],
  [
    "Flame Stalk",
    [
      51,
      21,
      35,
      36
    ],
    4,
    1
  ],
  [
    "Flax Seeds",
    [
      54,
      20,
      59,
      8
    ],
    5,
    0
  ],
  [
    "Flour",
    [
      50,
      12,
      25,
      40
    ],
    3,
    0
  ],
  [
    "Fly Amanita Cap",
    [
      48,
      0,
      51,
      60
    ],
    5,
    0
  ],
  [
    "Foxglove Nectar",
    [
      46,
      45,
      53,
      42
    ],
    5,
    0
  ],
  [
    "Frost Salts",
    [
      34,
      43,
      62,
      35
    ],
    2,
    0
  ],
  [
    "Fungus Stalk",
    [
      57,
      64,
      26,
      54
    ],
    5,
    1
  ],
  [
    "Garlic",
    [
      42,
      5,
      35,
      32
    ],
    2,
    0
  ],
  [
    "Ginseng",
    [
      10,
      4,
      0,
      29
    ],
    3,
    0
  ],
  [
    "Glow Dust",
    [
      56,
      37,
      41,
      8
    ],
    2,
    0
  ],
  [
    "Gnarl Bark",
    [
      49,
      59,
      22,
      8
    ],
    4,
    1
  ],
  [
    "Grapes",
    [
      50,
      64,
      17,
      8
    ],
    3,
    0
  ],
  [
    "Green Stain Cup Cap",
    [
      50,
      13,
      40,
      8
    ],
    5,
    0
  ],
  [
    "Grummite Eggs",
    [
      11,
      17,
      1,
      62
    ],
    5,
    1
  ],
  [
    "Ham",
    [
      50,
      51,
      11,
      10
    ],
    2,
    0
  ],
  [
    "Harrada",
    [
      8,
      11,
      62,
      39
    ],
    2,
    0
  ],
  [
    "Hound Tooth",
    [
      4,
      16,
      0,
      36
    ],
    2,
    1
  ],
  [
    "Hunger Tongue",
    [
      4,
      2,
      21,
      29
    ],
    2,
    1
  ],
  [
    "Hydnum Azure Giant Spore",
    [
      49,
      16,
      26,
      35
    ],
    5,
    1
  ],
  [
    "Imp Gall",
    [
      30,
      3,
      8,
      21
    ],
    3,
    0
  ],
  [
    "Lady's Mantle Leaves",
    [
      51,
      6,
      38,
      20
    ],
    2,
    0
  ],
  [
    "Lady's Smock Leaves",
    [
      52,
      43,
      7,
      26
    ],
    5,
    0
  ],
  [
    "Lavender Sprig",
    [
      55,
      33,
      51,
      10
    ],
    5,
    0
  ],
  [
    "Leek",
    [
      50,
      23,
      12,
      14
    ],
    3,
    0
  ],
  [
    "Letifer Orca Digestive Slime",
    [
      8,
      7,
      11,
      50
    ],
    3,
    1
  ],
  [
    "Lettuce",
    [
      50,
      53,
      22,
      12
    ],
    4,
    0
  ],
  [
    "Mandrake Root",
    [
      2,
      46,
      5,
      33
    ],
    4,
    0
  ],
  [
    "Milk Thistle Seeds",
    [
      37,
      34,
      3,
      39
    ],
    5,
    0
  ],
  [
    "Minotaur Horn",
    [
      58,
      0,
      24,
      45
    ],
    2,
    0
  ],
  [
    "Monkshood Root Pulp",
    [
      57,
      9,
      24,
      0
    ],
    5,
    0
  ],
  [
    "Morning Glory Root Pulp",
    [
      0,
      15,
      35,
      11
    ],
    3,
    0
  ],
  [
    "Mort Flesh",
    [
      7,
      10,
      26,
      62
    ],
    3,
    0
  ],
  [
    "Motherwort Sprig",
    [
      46,
      7,
      62,
      36
    ],
    5,
    0
  ],
  [
    "Mutton",
    [
      26,
      7,
      17,
      11
    ],
    3,
    0
  ],
  [
    "Nightshade",
    [
      8,
      0,
      10,
      29
    ],
    5,
    0
  ],
  [
    "Ogre's Teeth",
    [
      9,
      45,
      60,
      32
    ],
    2,
    0
  ],
  [
    "Onion",
    [
      50,
      63,
      16,
      8
    ],
    3,
    0
  ],
  [
    "Orange",
    [
      50,
      16,
      0,
      59
    ],
    2,
    0
  ],
  [
    "Pear",
    [
      50,
      13,
      31,
      8
    ],
    3,
    0
  ],
  [
    "Peony Seeds",
    [
      57,
      8,
      13,
      50
    ],
    4,
    0
  ],
  [
    "Potato",
    [
      50,
      59,
      0,
      35
    ],
    4,
    0
  ],
  [
    "Primrose Leaves",
    [
      58,
      55,
      28,
      14
    ],
    3,
    0
  ],
  [
    "Pumpkin",
    [
      50,
      5,
      12,
      16
    ],
    3,
    0
  ],
  [
    "Radish",
    [
      50,
      6,
      1,
      0
    ],
    3,
    0
  ],
  [
    "Rat Meat",
    [
      7,
      16,
      11,
      62
    ],
    4,
    0
  ],
  [
    "Red Kelp Gas Bladder",
    [
      56,
      63,
      2,
      29
    ],
    5,
    1
  ],
  [
    "Redwort Flower",
    [
      44,
      4,
      8,
      36
    ],
    3,
    0
  ],
  [
    "Rice",
    [
      50,
      62,
      61,
      5
    ],
    4,
    0
  ],
  [
    "Rot Scale",
    [
      0,
      8,
      62,
      39
    ],
    2,
    1
  ],
  [
    "Sacred Lotus Seeds",
    [
      44,
      8,
      20,
      17
    ],
    4,
    0
  ],
  [
    "Scales",
    [
      15,
      63,
      8,
      64
    ],
    2,
    0
  ],
  [
    "Scalon Fin",
    [
      63,
      8,
      60,
      0
    ],
    4,
    1
  ],
  [
    "Scamp Skin",
    [
      11,
      47,
      40,
      8
    ],
    2,
    0
  ],
  [
    "Screaming Maw",
    [
      58,
      16,
      1,
      51
    ],
    3,
    1
  ],
  [
    "Smoked Baliwog Leg",
    [
      50,
      20,
      51,
      7
    ],
    2,
    1
  ],
  [
    "Somnalius Frond",
    [
      56,
      6,
      26,
      20
    ],
    4,
    0
  ],
  [
    "Spiddal Stick",
    [
      8,
      11,
      21,
      50
    ],
    2,
    0
  ],
  [
    "St. Jahn's Wort Nectar",
    [
      47,
      8,
      4,
      1
    ],
    4,
    0
  ],
  [
    "Steel-Blue Entoloma Cap",
    [
      54,
      21,
      44,
      0
    ],
    5,
    0
  ],
  [
    "Stinkhorn Cap",
    [
      8,
      54,
      64,
      36
    ],
    2,
    0
  ],
  [
    "Strawberry",
    [
      50,
      4,
      8,
      40
    ],
    4,
    0
  ],
  [
    "Summer Bolete Cap",
    [
      48,
      59,
      12,
      6
    ],
    4,
    0
  ],
  [
    "Swamp Tentacle",
    [
      55,
      63,
      64,
      26
    ],
    3,
    1
  ],
  [
    "Sweetroll",
    [
      50,
      42,
      12,
      26
    ],
    2,
    0
  ],
  [
    "Taproot",
    [
      53,
      6,
      46,
      61
    ],
    2,
    0
  ],
  [
    "Thorn Hook",
    [
      8,
      10,
      54,
      26
    ],
    2,
    1
  ],
  [
    "Tiger Lily Nectar",
    [
      49,
      14,
      64,
      15
    ],
    4,
    0
  ],
  [
    "Tinder Polypore Cap",
    [
      58,
      42,
      36,
      11
    ],
    4,
    0
  ],
  [
    "Tomato",
    [
      50,
      16,
      0,
      59
    ],
    4,
    0
  ],
  [
    "Troll Fat",
    [
      5,
      30,
      15,
      8
    ],
    2,
    0
  ],
  [
    "Vampire Dust",
    [
      62,
      42,
      34,
      36
    ],
    2,
    0
  ],
  [
    "Venison",
    [
      51,
      20,
      8,
      1
    ],
    5,
    0
  ],
  [
    "Viper's Bugloss Leaves",
    [
      45,
      38,
      0,
      3
    ],
    5,
    0
  ],
  [
    "Void Essence",
    [
      51,
      26,
      32,
      24
    ],
    2,
    1
  ],
  [
    "Void Salts",
    [
      54,
      8,
      29,
      17
    ],
    2,
    0
  ],
  [
    "Watcher's Eye",
    [
      52,
      29,
      37,
      41
    ],
    2,
    1
  ],
  [
    "Water Hyacinth Nectar",
    [
      10,
      7,
      54,
      29
    ],
    3,
    0
  ],
  [
    "Water Root Pod Pit",
    [
      51,
      43,
      22,
      63
    ],
    3,
    1
  ],
  [
    "Watermelon",
    [
      50,
      37,
      0,
      8
    ],
    2,
    0
  ],
  [
    "Wheat Grain",
    [
      50,
      11,
      26,
      12
    ],
    3,
    0
  ],
  [
    "White Seed Pod",
    [
      57,
      63,
      62,
      37
    ],
    2,
    0
  ],
  [
    "Wisp Core",
    [
      52,
      0,
      37,
      1
    ],
    4,
    1
  ],
  [
    "Wisp Stalk Caps",
    [
      8,
      15,
      9,
      31
    ],
    4,
    0
  ],
  [
    "Withering Moon",
    [
      54,
      59,
      2,
      41
    ],
    5,
    1
  ],
  [
    "Worm's Head Cap",
    [
      53,
      38,
      25,
      39
    ],
    5,
    1
  ],
  [
    "Wormwood Leaves",
    [
      25,
      36,
      8,
      11
    ],
    3,
    0
  ]
],
    __rel_ingredient = each_index(0, __all),
    __rel_effect_list = each_index(1, __all),
    __rel_effect = each_index(0, __effects),
    __rel_worth = each_index(1, __effects),
    __rel_affinity = each_index(2, __effects);

function each_index(a, b) {
    for (var c = [], d = 0, f = b.length; 
      d < f; 
      d++) c[d] = b[d][a];
    return c
}

$(document).ready(function() {
    $("#autocomplete").autocomplete({
        source: map(function(a) {
            return a[0]
        }, __all),
        delay: 0,
        autofocus: !0
    });
    $(":radio").change(function() {
        refresh(!1)
    });
    $('input[name="pure"]').change(function() {
        refresh(!1)
    });
    $('input[name="alch"]').change(function() {
        refresh(!0)
    });
    $('input[name="freq"]').change(function() {
        refresh(!0)
    });
    $("#three:checkbox").change(function() {
        refresh(!0)
    });
    $("#si:checkbox").change(function() {
        refresh(!0)
    });
    $.each($(":button"), function(a, b) {
        $(b).button()
    });
    for(var i = 0; i < __effects.length; i++){
        $("#effects").append('<option value="' + i + '">' + __effects[i][0] + '</option>');
    }
    build_effects();
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

function build_effects() {
    for (var a = "", b = 0, c = __effects.length; b < c; b++) var d = __effects[b],
        a = a + ("<span class='effect' data-id='" + b + "' style='font-weight:bold;color:" + (1 === d[2] ? "green" : "red") + "'>" + d[0] + " ($" + d[1] + ")</span><br/>");
//    $("#listeffects").html(a);
    $(".effect").tooltip({
        bodyHandler: hover_effect,
        delay: 200
    })
}

function hover_effect() {
    for (var a = parseInt($(this).attr("data-id"), 10), 
      b = "<b>Effect Worth:</b> " + __rel_worth[a] + "<br/><b>Ingredients With Effect:</b><br/>", 
      c = [], 
      d = 0, 
      f = __all.length; 
      d < f; 
      d++) member(a, __rel_effect_list[d]) && c.push(__rel_ingredient[d]);
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
    __first_run && ($("#listeffects").css("visibility", "hidden"), $("#vid").remove(), __first_run = !1);
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
    console.log('bef__have=',__have.length,__exclude.length);
    a && delete_rare();
    __have.sort(function(a, b) {return a - b});
    console.log('aft__have=',__have.length,__exclude.length);
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
console.log('refresh1=',a, __matches&&__matches.length);
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
                    // console.log(n,o,r);
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
// console.log(a);
    return a.charAt(0).toUpperCase() + a.slice(1)
};

function filter(a, b, c) {
    for (var d = 0, f = a.length; d < f; d++)
        if (fun = a[d][1], fun(b, c)) return !0;
    return !1
}

function find_matches2() {
    var b = [], t = $("#three").prop("checked"), h = __have.length;
    for (i = 0; i < h - 1; i++) 
        for (j = i + 1; j < h; j++) {
            var i0 = __have[i], e0 = __all[i0][1], i1 = __have[j], e1 = __all[i1][1], c2 = intersect(e0, e1);
            if (c2.length > 0) 
                b.push([[i0, i1], c2, worth(c2, [i0, i1])]);
            
            if (t) 
                for (k = j + 1; k < h; k++) {
                    var i2 = __have[k], e2 = __all[i2][1], c3 = intersect(e0, e1, e2);
                    if (c3.length > c2.length && c3.length > intersect(e0, e2).length && c3.length > intersect(e1, e2).length) 
                        b.push([[i0, i1, i2], c3, worth(c3, [i0, i1, i2])]);
        }       }   
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

function map(a, b) {
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
    for (var b = 0, c = __matches.length; 
      b < c; 
      b++) void 0 !== __matches[b] && member(a, __matches[b][0]) && delete __matches[b];
    return refresh(!1)
}

function remove_item_wo(a) {
    for (var b = 0, c = __matches.length; 
      b < c; 
      b++) void 0 !== __matches[b] && member(a, __matches[b][0]) && delete __matches[b];
}

function remove_have(a) {
    for (var b = 0, c = __have.length; 
      b < c; 
      b++) a === __have[b] && __have.splice(b, 1)
}

function remove_rare(a) {
    for (var b = 0, c = __exclude.length; b < c; b++) a === __exclude[b] && __exclude.splice(b, 1)
}

function make(a) {
    for (var b = {}, c = 0, d = a.length; c < d; c++) b[a[c]] = __all[a[c]];
    return b
}

function member(a, b) {
    for (var c = 0, d = b.length; c < d; c++)
        if (a === b[c]) return !0;
    return !1
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
    __have=[]; 
    for (var i=0,len=__all.length;i<len;i++) __have.push(i);
    // gen();
    delete_rare();
    return refresh(true);
}

function add_item(a) { // refresh(true) rebuilds __matches after __have.push() (sync)
    if (!member(a,__have)) {
        __have.push(a);
        remove_rare(a);
        refresh(true);
    }
}

function delete_rare() {
//  __exclude = [10, 17, 19, 27, 30, 44, 45, 53, 63, 79, 87, 91, 92];
//         only: dmg mag regen, invisible, paralyze, slow
    __exclude = [];
    let alch = document.querySelector('input[name="alch"]:checked').id;
    let freq = parseInt((document.querySelector('input[name="freq"]:checked').id)[1], 10);
    let si = document.getElementById('si').checked;

    console.log('alch=',alch,', freq=',freq,', si=',si);
    __all.forEach((e,i) => {
      // console.log(e[0],e[2],e[2] <= freq?'true':'false',e[3],!si && e[3]?'true':'false', ', i=',i , ', f=', freq, (!si && e[3] || e[2] <= freq)?'true':'false');
      if(!si && e[3] || e[2] <= freq) __exclude.push(i);
    });
    console.log(__exclude);
    // __exclude = [2,4,5,11,12,13,14,20,23,26,27,28,29,30,31,32,33,34,35,38,41,43,44,45,47,50,51,52,53,55,56,59,60,64,66,67,69,71,72,73,74,77,78,79,82,84,86,88,89,90,92,95,98,99,100,101,105,107,110,111,112,113,114,115,116,117];

    __have=[]; 
    for (var i=0,len=__all.length;i<len;i++) __have.push(i);

    for (i = 0; i < __exclude.length; i++) {
      // console.log();
        remove_have(__exclude[i]);
        remove_item_wo(__exclude[i]);
    }
}

function exclude() {
    __exclude.sort(function(a, b) {return a - b});
    var e = "<hr/><h4 style='margin:0;padding:0'>Rare Ingredients Excluded</h4>";
    // console.log('__rel_ingredient=',__rel_ingredient);

    for (i = 0; i < __exclude.length; i++){
        // console.log(__exclude[i],'all=',__all[__exclude[i]][0],'rel=', __rel_ingredient[__exclude[i]]);
        e += '<a href="#" onclick="add_item('+ __exclude[i] +');" ><img src="'+ __additem +'"/></a>&nbsp;&nbsp;' +
             '<span class="ingredient" data-name="' + __exclude[i] + '">' + upper_first(__rel_ingredient[__exclude[i]]) +  '</span><br/>';}
    return e
}

function arr2str(a) {
    for (var b = "[", c = 0, d = a.length; c < d; c++) b += a[c] + ",";
    return b.substr(0, b.length - 1) + "]"
}
