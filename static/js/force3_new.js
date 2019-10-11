// This is adapted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7

var data3_new = {"directed": false, "multigraph": false, "graph": {}, "nodes": [{"betweenness": 0.0, "class": 0, "id": "reactor_OP"}, {"betweenness": 0.0, "class": 0, "id": "plant_manager"}, {"betweenness": 0.0, "class": 0, "id": "auxiliary_building_assistant"}, {"betweenness": 0.0, "class": 2, "id": "engineers_unspec"}, {"betweenness": 0.0, "class": 0, "id": "s_reactor_operator"}, {"betweenness": 0.0, "class": 0, "id": "CR_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "physician"}, {"betweenness": 0.0, "class": 0, "id": "mechanic_unspec"}, {"betweenness": 0.0, "class": 0, "id": "shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "contractor_nonlicensed"}, {"betweenness": 0.0, "class": 0, "id": "operator_trainee_unspec"}, {"betweenness": 0.0, "class": 0, "id": "maintenance_sup"}, {"betweenness": 0.0, "class": 0, "id": "reactor_ENG"}, {"betweenness": 0.0, "class": 0, "id": "util_OP"}, {"betweenness": 44.14965986394559, "class": 3, "id": "operators_unspec"}, {"betweenness": 1.2244897959183674, "class": 0, "id": "supervisor"}, {"betweenness": 0.0, "class": 0, "id": "CR_shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "system_design_ENG"}, {"betweenness": 40.952380952380956, "class": 3, "id": "operator_unspec"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_staff"}, {"betweenness": 0.0, "class": 0, "id": "mechanics_unspec"}, {"betweenness": 0.0, "class": 0, "id": "quality_control"}, {"betweenness": 33.673469387755105, "class": 2, "id": "engineer_unspec"}, {"betweenness": 0.0, "class": 0, "id": "i_and_c_tech"}, {"betweenness": 0.0, "class": 0, "id": "transmission_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "assistant_shift_sup"}, {"betweenness": 16.3265306122449, "class": 0, "id": "technician_unspec"}, {"betweenness": 0.0, "class": 0, "id": "analysts_unspec"}, {"betweenness": 0.0, "class": 0, "id": "operations_sup"}, {"betweenness": 0.0, "class": 0, "id": "shift_technical_advisor"}, {"betweenness": 0.0, "class": 0, "id": "independent_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "outage_manager"}, {"betweenness": 0.0, "class": 0, "id": "worker_unspec"}, {"betweenness": 0.0, "class": 0, "id": "procedure_writer"}, {"betweenness": 0.8163265306122448, "class": 1, "id": "control_room_sup"}, {"betweenness": 0.0, "class": 0, "id": "fire_shift_CPT"}, {"betweenness": 0.0, "class": 0, "id": "radiation_protection_tech"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_sup"}, {"betweenness": 0.0, "class": 0, "id": "team_lead"}, {"betweenness": 0.0, "class": 0, "id": "licensed_OP"}, {"betweenness": 0.0, "class": 0, "id": "control_room_OP"}, {"betweenness": 0.0, "class": 0, "id": "chem_tech"}, {"betweenness": 0.0, "class": 4, "id": "tech_unspec"}, {"betweenness": 0.0, "class": 0, "id": "electrician"}, {"betweenness": 0.0, "class": 0, "id": "Work_control_supervisor"}, {"betweenness": 1.9047619047619044, "class": 0, "id": "operations_manager"}, {"betweenness": 85.9183673469388, "class": 1, "id": "supervisor_unspec"}, {"betweenness": 0.0, "class": 0, "id": "rp_tech"}, {"betweenness": 3.265306122448979, "class": 0, "id": "maintenance_WKR"}, {"betweenness": 41.972789115646265, "class": 1, "id": "shift_manager"}, {"betweenness": 0.0, "class": 0, "id": "resident_inspector"}], "links": [{"weight": 1, "source": "reactor_OP", "target": "shift_manager"}, {"weight": 2, "source": "engineers_unspec", "target": "operators_unspec"}, {"weight": 4, "source": "engineers_unspec", "target": "supervisor"}, {"weight": 2, "source": "s_reactor_operator", "target": "operator_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "shift_manager"}, {"weight": 1, "source": "CR_supervisor", "target": "shift_manager"}, {"weight": 1, "source": "CR_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "control_room_sup"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "engineer_unspec"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "contractor_nonlicensed"}, {"weight": 1, "source": "operator_trainee_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "maintenance_sup", "target": "supervisor_unspec"}, {"weight": 24, "source": "operators_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "supervisor"}, {"weight": 1, "source": "operators_unspec", "target": "maintenance_WKR"}, {"weight": 2, "source": "operators_unspec", "target": "operator_unspec"}, {"weight": 4, "source": "operators_unspec", "target": "operators_unspec"}, {"weight": 2, "source": "operators_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "operations_manager"}, {"weight": 2, "source": "supervisor", "target": "supervisor"}, {"weight": 1, "source": "supervisor", "target": "maintenance_WKR"}, {"weight": 1, "source": "supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "maintenance_WKR"}, {"weight": 4, "source": "operator_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "shift_manager"}, {"weight": 1, "source": "operator_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "control_room_sup"}, {"weight": 1, "source": "operator_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "control_room_sup"}, {"weight": 1, "source": "engineer_unspec", "target": "supervisor_unspec"}, {"weight": 3, "source": "engineer_unspec", "target": "shift_manager"}, {"weight": 1, "source": "engineer_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "assistant_shift_sup", "target": "operations_manager"}, {"weight": 1, "source": "assistant_shift_sup", "target": "supervisor_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "procedure_writer"}, {"weight": 2, "source": "control_room_sup", "target": "control_room_sup"}, {"weight": 1, "source": "control_room_sup", "target": "shift_manager"}, {"weight": 1, "source": "licensed_OP", "target": "supervisor_unspec"}, {"weight": 1, "source": "electrician", "target": "electrician"}, {"weight": 1, "source": "electrician", "target": "shift_manager"}, {"weight": 1, "source": "operations_manager", "target": "supervisor_unspec"}, {"weight": 1, "source": "supervisor_unspec", "target": "shift_manager"}]}


var svg3_new = d3.select("#svg3_new"),
    width = +svg3_new.attr("width"),
    height = +svg3_new.attr("height");

var simulation3_new = d3.forceSimulation(svg3_new)
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json("data3_new", function (error, graph3_new) {

    if (error == true) throw error;

    graph3_new = data3_new;

    var link = svg3_new.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph3_new.links)
        .enter().append("line");

    var node = svg3_new.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph3_new.nodes)
        .enter().append("circle")
        .style("fill", function(d) {
        if (d.class == 1)
        return '#d64b24';
        else if (d.class == 2)
        return '#4b9b23';
        else if (d.class == 3)
        return '#c03bb7';
        else if (d.class == 4)
        return '#46212d';
        else
        return '#008bff';
  })
        .attr("r", function(d) {
        if (d.betweenness >= 20 ){return 15}
        else if (d.betweenness < 20 && d.betweenness >= 16) {return 12}
        else if (d.betweenness < 16 && d.betweenness > 9) {return 10}
        else return d.betweenness + 1.0;
  })
        .call(d3.drag()
            .on("start", dragstarted3_new)
            .on("drag", dragged3_new)
            .on("end", dragended3_new));

    node.append("title")
        .text(function (d) {
            return d.id;
        });

    simulation3_new
        .nodes(graph3_new.nodes)
        .on("tick", ticked);

    simulation3_new.force("link")
        .links(graph3_new.links);

    function ticked() {
        link
            .attr("x1", function (d) {
                return d.source.x;
            })
            .attr("y1", function (d) {
                return d.source.y;
            })
            .attr("x2", function (d) {
                return d.target.x;
            })
            .attr("y2", function (d) {
                return d.target.y;
            });

        node
            .attr("cx", function (d) {
                return d.x;
            })
            .attr("cy", function (d) {
                return d.y;
            });

    }
});

function dragstarted3_new(d) {
    if (!d3.event.active) simulation3_new.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged3_new(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended3_new(d) {
    if (!d3.event.active) simulation3_new.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
