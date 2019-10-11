// This is adapted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7

var data3 = {"directed": false, "multigraph": false, "graph": {}, "nodes": [{"betweenness": 0.0, "class": 0, "id": "reactor_OP"}, {"betweenness": 30.233236151603496, "class": 0, "id": "plant_manager"}, {"betweenness": 0.0, "class": 0, "id": "auxiliary_building_assistant"}, {"betweenness": 3.258503401360545, "class": 2, "id": "engineers_unspec"}, {"betweenness": 15.62801824026314, "class": 0, "id": "s_reactor_operator"}, {"betweenness": 4.487852283770651, "class": 0, "id": "CR_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "physician"}, {"betweenness": 0.0, "class": 0, "id": "mechanic_unspec"}, {"betweenness": 1.183673469387755, "class": 0, "id": "shift_supervisor"}, {"betweenness": 1.3605442176870748, "class": 0, "id": "contractor_nonlicensed"}, {"betweenness": 0.0, "class": 0, "id": "operator_trainee_unspec"}, {"betweenness": 0.0, "class": 0, "id": "maintenance_sup"}, {"betweenness": 0.0, "class": 0, "id": "reactor_ENG"}, {"betweenness": 0.0, "class": 0, "id": "util_OP"}, {"betweenness": 85.69048864967232, "class": 3, "id": "operators_unspec"}, {"betweenness": 19.63584261543446, "class": 0, "id": "supervisor"}, {"betweenness": 0.0, "class": 0, "id": "CR_shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "system_design_ENG"}, {"betweenness": 102.71946873987689, "class": 3, "id": "operator_unspec"}, {"betweenness": 5.6958211856171035, "class": 0, "id": "fire_watch_staff"}, {"betweenness": 0.0, "class": 0, "id": "mechanics_unspec"}, {"betweenness": 0.0, "class": 0, "id": "quality_control"}, {"betweenness": 72.14422765443172, "class": 2, "id": "engineer_unspec"}, {"betweenness": 0.0, "class": 0, "id": "i_and_c_tech"}, {"betweenness": 0.0, "class": 0, "id": "transmission_system_OP"}, {"betweenness": 3.3780369290573367, "class": 0, "id": "assistant_shift_sup"}, {"betweenness": 2.3556851311953357, "class": 0, "id": "technician_unspec"}, {"betweenness": 0.0, "class": 0, "id": "analysts_unspec"}, {"betweenness": 1.2827988338192422, "class": 0, "id": "operations_sup"}, {"betweenness": 3.234207968901847, "class": 0, "id": "shift_technical_advisor"}, {"betweenness": 0.0, "class": 0, "id": "independent_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "outage_manager"}, {"betweenness": 0.0, "class": 0, "id": "worker_unspec"}, {"betweenness": 0.0, "class": 0, "id": "procedure_writer"}, {"betweenness": 0.0, "class": 1, "id": "control_room_sup"}, {"betweenness": 0.0, "class": 0, "id": "fire_shift_CPT"}, {"betweenness": 1.5928085519922262, "class": 0, "id": "radiation_protection_tech"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_sup"}, {"betweenness": 0.0, "class": 0, "id": "team_lead"}, {"betweenness": 2.3012633624878527, "class": 0, "id": "licensed_OP"}, {"betweenness": 4.77643218459545, "class": 0, "id": "control_room_OP"}, {"betweenness": 0.0, "class": 0, "id": "chem_tech"}, {"betweenness": 8.455358700256658, "class": 4, "id": "tech_unspec"}, {"betweenness": 33.02165408287858, "class": 0, "id": "electrician"}, {"betweenness": 0.0, "class": 0, "id": "Work_control_supervisor"}, {"betweenness": 0.6122448979591837, "class": 0, "id": "operations_manager"}, {"betweenness": 115.1768458299071, "class": 1, "id": "supervisor_unspec"}, {"betweenness": 0.0, "class": 0, "id": "rp_tech"}, {"betweenness": 3.2655303879793682, "class": 0, "id": "maintenance_WKR"}, {"betweenness": 79.32578306047695, "class": 1, "id": "shift_manager"}, {"betweenness": 0.0, "class": 0, "id": "resident_inspector"}], "links": [{"weight": 1, "source": "plant_manager", "target": "assistant_shift_sup"}, {"weight": 2, "source": "plant_manager", "target": "resident_inspector"}, {"weight": 1, "source": "plant_manager", "target": "supervisor"}, {"weight": 1, "source": "plant_manager", "target": "shift_manager"}, {"weight": 1, "source": "engineers_unspec", "target": "s_reactor_operator"}, {"weight": 1, "source": "engineers_unspec", "target": "supervisor"}, {"weight": 1, "source": "engineers_unspec", "target": "shift_manager"}, {"weight": 7, "source": "engineers_unspec", "target": "operators_unspec"}, {"weight": 2, "source": "engineers_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "maintenance_WKR"}, {"weight": 2, "source": "engineers_unspec", "target": "control_room_OP"}, {"weight": 3, "source": "engineers_unspec", "target": "engineers_unspec"}, {"weight": 3, "source": "s_reactor_operator", "target": "supervisor_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "control_room_sup"}, {"weight": 1, "source": "s_reactor_operator", "target": "operators_unspec"}, {"weight": 1, "source": "s_reactor_operator", "target": "shift_manager"}, {"weight": 1, "source": "s_reactor_operator", "target": "engineer_unspec"}, {"weight": 2, "source": "s_reactor_operator", "target": "outage_manager"}, {"weight": 1, "source": "s_reactor_operator", "target": "shift_technical_advisor"}, {"weight": 1, "source": "s_reactor_operator", "target": "operator_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "shift_manager"}, {"weight": 3, "source": "CR_supervisor", "target": "operators_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "licensed_OP"}, {"weight": 1, "source": "CR_supervisor", "target": "engineer_unspec"}, {"weight": 1, "source": "mechanic_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "mechanic_unspec", "target": "electrician"}, {"weight": 1, "source": "mechanic_unspec", "target": "engineer_unspec"}, {"weight": 3, "source": "shift_supervisor", "target": "supervisor_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "shift_technical_advisor"}, {"weight": 1, "source": "shift_supervisor", "target": "shift_supervisor"}, {"weight": 1, "source": "shift_supervisor", "target": "control_room_OP"}, {"weight": 1, "source": "shift_supervisor", "target": "operators_unspec"}, {"weight": 6, "source": "contractor_nonlicensed", "target": "engineer_unspec"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "radiation_protection_tech"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "technician_unspec"}, {"weight": 1, "source": "operator_trainee_unspec", "target": "licensed_OP"}, {"weight": 4, "source": "operator_trainee_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "maintenance_sup", "target": "engineer_unspec"}, {"weight": 1, "source": "maintenance_sup", "target": "supervisor_unspec"}, {"weight": 2, "source": "maintenance_sup", "target": "electrician"}, {"weight": 1, "source": "maintenance_sup", "target": "operator_unspec"}, {"weight": 1, "source": "reactor_ENG", "target": "operators_unspec"}, {"weight": 7, "source": "operators_unspec", "target": "supervisor_unspec"}, {"weight": 4, "source": "operators_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "licensed_OP"}, {"weight": 3, "source": "operators_unspec", "target": "operators_unspec"}, {"weight": 2, "source": "operators_unspec", "target": "operations_manager"}, {"weight": 1, "source": "operators_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "maintenance_WKR"}, {"weight": 2, "source": "operators_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "electrician"}, {"weight": 3, "source": "operators_unspec", "target": "supervisor"}, {"weight": 1, "source": "operators_unspec", "target": "procedure_writer"}, {"weight": 1, "source": "supervisor", "target": "supervisor_unspec"}, {"weight": 1, "source": "supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "supervisor", "target": "maintenance_WKR"}, {"weight": 2, "source": "supervisor", "target": "fire_watch_staff"}, {"weight": 1, "source": "supervisor", "target": "control_room_OP"}, {"weight": 1, "source": "operator_unspec", "target": "operations_manager"}, {"weight": 9, "source": "operator_unspec", "target": "supervisor_unspec"}, {"weight": 12, "source": "operator_unspec", "target": "operator_unspec"}, {"weight": 4, "source": "operator_unspec", "target": "shift_manager"}, {"weight": 1, "source": "operator_unspec", "target": "control_room_sup"}, {"weight": 3, "source": "operator_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "operator_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "licensed_OP"}, {"weight": 1, "source": "operator_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "operator_unspec", "target": "operations_sup"}, {"weight": 1, "source": "operator_unspec", "target": "shift_technical_advisor"}, {"weight": 1, "source": "operator_unspec", "target": "fire_watch_staff"}, {"weight": 1, "source": "operator_unspec", "target": "electrician"}, {"weight": 1, "source": "operator_unspec", "target": "assistant_shift_sup"}, {"weight": 3, "source": "fire_watch_staff", "target": "quality_control"}, {"weight": 10, "source": "fire_watch_staff", "target": "fire_watch_staff"}, {"weight": 1, "source": "fire_watch_staff", "target": "shift_manager"}, {"weight": 4, "source": "fire_watch_staff", "target": "supervisor_unspec"}, {"weight": 1, "source": "fire_watch_staff", "target": "control_room_OP"}, {"weight": 1, "source": "mechanics_unspec", "target": "electrician"}, {"weight": 1, "source": "mechanics_unspec", "target": "mechanics_unspec"}, {"weight": 1, "source": "quality_control", "target": "supervisor_unspec"}, {"weight": 2, "source": "engineer_unspec", "target": "electrician"}, {"weight": 7, "source": "engineer_unspec", "target": "engineer_unspec"}, {"weight": 5, "source": "engineer_unspec", "target": "shift_manager"}, {"weight": 1, "source": "engineer_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "engineer_unspec", "target": "worker_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "technician_unspec"}, {"weight": 6, "source": "technician_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "tech_unspec"}, {"weight": 4, "source": "operations_sup", "target": "supervisor_unspec"}, {"weight": 1, "source": "operations_sup", "target": "shift_manager"}, {"weight": 2, "source": "operations_sup", "target": "electrician"}, {"weight": 2, "source": "shift_technical_advisor", "target": "supervisor_unspec"}, {"weight": 1, "source": "shift_technical_advisor", "target": "tech_unspec"}, {"weight": 1, "source": "shift_technical_advisor", "target": "shift_manager"}, {"weight": 1, "source": "outage_manager", "target": "supervisor_unspec"}, {"weight": 1, "source": "outage_manager", "target": "outage_manager"}, {"weight": 1, "source": "outage_manager", "target": "shift_manager"}, {"weight": 1, "source": "radiation_protection_tech", "target": "supervisor_unspec"}, {"weight": 1, "source": "control_room_OP", "target": "shift_manager"}, {"weight": 1, "source": "control_room_OP", "target": "supervisor_unspec"}, {"weight": 1, "source": "tech_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "electrician", "target": "electrician"}, {"weight": 2, "source": "electrician", "target": "supervisor_unspec"}, {"weight": 3, "source": "Work_control_supervisor", "target": "shift_manager"}, {"weight": 1, "source": "operations_manager", "target": "shift_manager"}, {"weight": 10, "source": "supervisor_unspec", "target": "shift_manager"}, {"weight": 10, "source": "supervisor_unspec", "target": "supervisor_unspec"}, {"weight": 2, "source": "supervisor_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "maintenance_WKR", "target": "shift_manager"}, {"weight": 2, "source": "shift_manager", "target": "shift_manager"}]}


var svg3 = d3.select("#svg3"),
    width = +svg3.attr("width"),
    height = +svg3.attr("height");

var simulation3 = d3.forceSimulation(svg3)
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json(data3, function (error, graph3) {

    if (error == true) throw error;

    graph3 = data3;

    var link = svg3.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph3.links)
        .enter().append("line");

    var node = svg3.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph3.nodes)
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
            .on("start", dragstarted3)
            .on("drag", dragged3)
            .on("end", dragended3));

    node.append("title")
        .text(function (d) {
            return d.id;
        });

    simulation3
        .nodes(graph3.nodes)
        .on("tick", ticked);

    simulation3.force("link")
        .links(graph3.links);

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

function dragstarted3(d) {
    if (!d3.event.active) simulation3.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged3(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended3(d) {
    if (!d3.event.active) simulation3.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
