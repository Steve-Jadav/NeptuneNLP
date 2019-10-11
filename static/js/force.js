// This is adapted from https://bl.ocks.org/mbostock/2675ff61ea5e063ede2b5d63c08020c7

var data = {"directed": false, "multigraph": false, "graph": {}, "nodes": [{"betweenness": 9.826780928821748, "class": 0, "id": "reactor_OP"}, {"betweenness": 0.0, "class": 0, "id": "plant_manager"}, {"betweenness": 0.0, "class": 0, "id": "auxiliary_building_assistant"}, {"betweenness": 33.00053567880699, "class": 2, "id": "engineers_unspec"}, {"betweenness": 16.524723109356962, "class": 0, "id": "s_reactor_operator"}, {"betweenness": 8.475542597991577, "class": 0, "id": "CR_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "physician"}, {"betweenness": 1.5021350531554614, "class": 0, "id": "mechanic_unspec"}, {"betweenness": 6.967739743249946, "class": 0, "id": "shift_supervisor"}, {"betweenness": 31.05325353584658, "class": 0, "id": "contractor_nonlicensed"}, {"betweenness": 0.27210884353741494, "class": 0, "id": "operator_trainee_unspec"}, {"betweenness": 13.830041906872639, "class": 0, "id": "maintenance_sup"}, {"betweenness": 0.0, "class": 0, "id": "reactor_ENG"}, {"betweenness": 0.0, "class": 0, "id": "util_OP"}, {"betweenness": 147.83490272565905, "class": 3, "id": "operators_unspec"}, {"betweenness": 1.5446178471388554, "class": 0, "id": "supervisor"}, {"betweenness": 0.0, "class": 0, "id": "CR_shift_supervisor"}, {"betweenness": 0.0, "class": 0, "id": "system_design_ENG"}, {"betweenness": 63.60408818872204, "class": 3, "id": "operator_unspec"}, {"betweenness": 14.493519285836213, "class": 0, "id": "fire_watch_staff"}, {"betweenness": 0.0, "class": 0, "id": "mechanics_unspec"}, {"betweenness": 0.0, "class": 0, "id": "quality_control"}, {"betweenness": 88.56064690278376, "class": 2, "id": "engineer_unspec"}, {"betweenness": 0.0, "class": 0, "id": "i_and_c_tech"}, {"betweenness": 0.0, "class": 0, "id": "transmission_system_OP"}, {"betweenness": 1.8778047349475921, "class": 0, "id": "assistant_shift_sup"}, {"betweenness": 47.67689746561295, "class": 0, "id": "technician_unspec"}, {"betweenness": 0.40816326530612246, "class": 0, "id": "analysts_unspec"}, {"betweenness": 0.0, "class": 0, "id": "operations_sup"}, {"betweenness": 6.021887409642511, "class": 0, "id": "shift_technical_advisor"}, {"betweenness": 0.0, "class": 0, "id": "independent_system_OP"}, {"betweenness": 0.0, "class": 0, "id": "outage_manager"}, {"betweenness": 0.0, "class": 0, "id": "worker_unspec"}, {"betweenness": 0.0, "class": 0, "id": "procedure_writer"}, {"betweenness": 6.041070041070042, "class": 1, "id": "control_room_sup"}, {"betweenness": 0.0, "class": 0, "id": "fire_shift_CPT"}, {"betweenness": 0.0, "class": 0, "id": "radiation_protection_tech"}, {"betweenness": 0.0, "class": 0, "id": "fire_watch_sup"}, {"betweenness": 0.0, "class": 0, "id": "team_lead"}, {"betweenness": 5.642135642135642, "class": 0, "id": "licensed_OP"}, {"betweenness": 40.55025993081215, "class": 0, "id": "control_room_OP"}, {"betweenness": 0.0, "class": 0, "id": "chem_tech"}, {"betweenness": 9.376716920534445, "class": 4, "id": "tech_unspec"}, {"betweenness": 12.142592101775774, "class": 0, "id": "electrician"}, {"betweenness": 0.940424654710369, "class": 0, "id": "Work_control_supervisor"}, {"betweenness": 32.7780518800927, "class": 0, "id": "operations_manager"}, {"betweenness": 148.19199727843184, "class": 1, "id": "supervisor_unspec"}, {"betweenness": 0.0, "class": 0, "id": "rp_tech"}, {"betweenness": 13.678588185190824, "class": 0, "id": "maintenance_WKR"}, {"betweenness": 21.672570060325164, "class": 1, "id": "shift_manager"}, {"betweenness": 0.0, "class": 0, "id": "resident_inspector"}], "links": [{"weight": 1, "source": "reactor_OP", "target": "engineer_unspec"}, {"weight": 1, "source": "reactor_OP", "target": "reactor_OP"}, {"weight": 2, "source": "reactor_OP", "target": "shift_technical_advisor"}, {"weight": 2, "source": "reactor_OP", "target": "operator_trainee_unspec"}, {"weight": 4, "source": "reactor_OP", "target": "operator_unspec"}, {"weight": 3, "source": "reactor_OP", "target": "control_room_sup"}, {"weight": 1, "source": "reactor_OP", "target": "shift_supervisor"}, {"weight": 1, "source": "reactor_OP", "target": "technician_unspec"}, {"weight": 1, "source": "plant_manager", "target": "operations_manager"}, {"weight": 1, "source": "engineers_unspec", "target": "tech_unspec"}, {"weight": 2, "source": "engineers_unspec", "target": "supervisor"}, {"weight": 1, "source": "engineers_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "engineers_unspec", "target": "contractor_nonlicensed"}, {"weight": 1, "source": "engineers_unspec", "target": "operators_unspec"}, {"weight": 7, "source": "engineers_unspec", "target": "engineers_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "analysts_unspec"}, {"weight": 1, "source": "engineers_unspec", "target": "shift_technical_advisor"}, {"weight": 1, "source": "s_reactor_operator", "target": "maintenance_WKR"}, {"weight": 1, "source": "s_reactor_operator", "target": "maintenance_sup"}, {"weight": 2, "source": "s_reactor_operator", "target": "engineer_unspec"}, {"weight": 2, "source": "s_reactor_operator", "target": "supervisor_unspec"}, {"weight": 2, "source": "s_reactor_operator", "target": "assistant_shift_sup"}, {"weight": 1, "source": "s_reactor_operator", "target": "shift_technical_advisor"}, {"weight": 1, "source": "s_reactor_operator", "target": "shift_manager"}, {"weight": 1, "source": "s_reactor_operator", "target": "operators_unspec"}, {"weight": 6, "source": "CR_supervisor", "target": "shift_manager"}, {"weight": 2, "source": "CR_supervisor", "target": "control_room_OP"}, {"weight": 2, "source": "CR_supervisor", "target": "operator_unspec"}, {"weight": 2, "source": "CR_supervisor", "target": "engineer_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "tech_unspec"}, {"weight": 2, "source": "CR_supervisor", "target": "supervisor_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "operators_unspec"}, {"weight": 1, "source": "CR_supervisor", "target": "Work_control_supervisor"}, {"weight": 1, "source": "CR_supervisor", "target": "licensed_OP"}, {"weight": 1, "source": "mechanic_unspec", "target": "contractor_nonlicensed"}, {"weight": 1, "source": "mechanic_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "engineer_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "operator_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "assistant_shift_sup"}, {"weight": 1, "source": "shift_supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "shift_supervisor"}, {"weight": 2, "source": "shift_supervisor", "target": "operators_unspec"}, {"weight": 1, "source": "shift_supervisor", "target": "electrician"}, {"weight": 5, "source": "contractor_nonlicensed", "target": "maintenance_WKR"}, {"weight": 5, "source": "contractor_nonlicensed", "target": "contractor_nonlicensed"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "supervisor_unspec"}, {"weight": 6, "source": "contractor_nonlicensed", "target": "fire_watch_staff"}, {"weight": 2, "source": "contractor_nonlicensed", "target": "maintenance_sup"}, {"weight": 1, "source": "contractor_nonlicensed", "target": "worker_unspec"}, {"weight": 6, "source": "operator_trainee_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operator_trainee_unspec", "target": "control_room_sup"}, {"weight": 1, "source": "operator_trainee_unspec", "target": "licensed_OP"}, {"weight": 1, "source": "maintenance_sup", "target": "analysts_unspec"}, {"weight": 1, "source": "maintenance_sup", "target": "fire_watch_staff"}, {"weight": 1, "source": "maintenance_sup", "target": "maintenance_WKR"}, {"weight": 1, "source": "maintenance_sup", "target": "technician_unspec"}, {"weight": 1, "source": "reactor_ENG", "target": "supervisor_unspec"}, {"weight": 18, "source": "operators_unspec", "target": "operators_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "licensed_OP"}, {"weight": 5, "source": "operators_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "electrician"}, {"weight": 1, "source": "operators_unspec", "target": "operations_manager"}, {"weight": 5, "source": "operators_unspec", "target": "operator_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "shift_technical_advisor"}, {"weight": 5, "source": "operators_unspec", "target": "supervisor"}, {"weight": 6, "source": "operators_unspec", "target": "shift_manager"}, {"weight": 1, "source": "operators_unspec", "target": "Work_control_supervisor"}, {"weight": 1, "source": "operators_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "operators_unspec", "target": "supervisor_unspec"}, {"weight": 2, "source": "operators_unspec", "target": "assistant_shift_sup"}, {"weight": 2, "source": "operators_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "operators_unspec", "target": "independent_system_OP"}, {"weight": 1, "source": "operators_unspec", "target": "operations_sup"}, {"weight": 3, "source": "operators_unspec", "target": "maintenance_WKR"}, {"weight": 3, "source": "supervisor", "target": "tech_unspec"}, {"weight": 1, "source": "supervisor", "target": "maintenance_WKR"}, {"weight": 2, "source": "supervisor", "target": "supervisor_unspec"}, {"weight": 1, "source": "CR_shift_supervisor", "target": "technician_unspec"}, {"weight": 1, "source": "system_design_ENG", "target": "engineer_unspec"}, {"weight": 12, "source": "operator_unspec", "target": "operator_unspec"}, {"weight": 2, "source": "operator_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "control_room_sup"}, {"weight": 8, "source": "operator_unspec", "target": "control_room_OP"}, {"weight": 1, "source": "operator_unspec", "target": "technician_unspec"}, {"weight": 2, "source": "operator_unspec", "target": "shift_manager"}, {"weight": 2, "source": "operator_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "operator_unspec", "target": "licensed_OP"}, {"weight": 9, "source": "fire_watch_staff", "target": "fire_watch_staff"}, {"weight": 4, "source": "fire_watch_staff", "target": "maintenance_WKR"}, {"weight": 1, "source": "fire_watch_staff", "target": "worker_unspec"}, {"weight": 4, "source": "fire_watch_staff", "target": "engineer_unspec"}, {"weight": 2, "source": "mechanics_unspec", "target": "engineer_unspec"}, {"weight": 1, "source": "mechanics_unspec", "target": "supervisor_unspec"}, {"weight": 4, "source": "engineer_unspec", "target": "engineer_unspec"}, {"weight": 2, "source": "engineer_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "control_room_OP"}, {"weight": 3, "source": "engineer_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "engineer_unspec", "target": "resident_inspector"}, {"weight": 3, "source": "engineer_unspec", "target": "shift_manager"}, {"weight": 2, "source": "engineer_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "i_and_c_tech", "target": "supervisor_unspec"}, {"weight": 2, "source": "assistant_shift_sup", "target": "operations_manager"}, {"weight": 1, "source": "technician_unspec", "target": "electrician"}, {"weight": 2, "source": "technician_unspec", "target": "supervisor_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "control_room_OP"}, {"weight": 2, "source": "technician_unspec", "target": "technician_unspec"}, {"weight": 1, "source": "technician_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "shift_technical_advisor", "target": "shift_manager"}, {"weight": 1, "source": "shift_technical_advisor", "target": "control_room_sup"}, {"weight": 1, "source": "control_room_sup", "target": "licensed_OP"}, {"weight": 1, "source": "control_room_sup", "target": "shift_manager"}, {"weight": 1, "source": "control_room_sup", "target": "Work_control_supervisor"}, {"weight": 1, "source": "control_room_sup", "target": "control_room_sup"}, {"weight": 1, "source": "fire_watch_sup", "target": "fire_watch_sup"}, {"weight": 2, "source": "team_lead", "target": "control_room_OP"}, {"weight": 1, "source": "team_lead", "target": "electrician"}, {"weight": 1, "source": "licensed_OP", "target": "licensed_OP"}, {"weight": 1, "source": "licensed_OP", "target": "control_room_OP"}, {"weight": 1, "source": "control_room_OP", "target": "control_room_OP"}, {"weight": 1, "source": "control_room_OP", "target": "electrician"}, {"weight": 1, "source": "control_room_OP", "target": "resident_inspector"}, {"weight": 1, "source": "control_room_OP", "target": "tech_unspec"}, {"weight": 2, "source": "control_room_OP", "target": "supervisor_unspec"}, {"weight": 1, "source": "chem_tech", "target": "supervisor_unspec"}, {"weight": 1, "source": "tech_unspec", "target": "shift_manager"}, {"weight": 2, "source": "tech_unspec", "target": "supervisor_unspec"}, {"weight": 3, "source": "tech_unspec", "target": "tech_unspec"}, {"weight": 1, "source": "electrician", "target": "electrician"}, {"weight": 1, "source": "electrician", "target": "supervisor_unspec"}, {"weight": 1, "source": "electrician", "target": "shift_manager"}, {"weight": 2, "source": "operations_manager", "target": "shift_manager"}, {"weight": 1, "source": "operations_manager", "target": "supervisor_unspec"}, {"weight": 3, "source": "supervisor_unspec", "target": "maintenance_WKR"}, {"weight": 1, "source": "supervisor_unspec", "target": "shift_manager"}, {"weight": 3, "source": "maintenance_WKR", "target": "maintenance_WKR"}, {"weight": 2, "source": "shift_manager", "target": "shift_manager"}, {"weight": 2, "source": "resident_inspector", "target": "resident_inspector"}]}



var svg1 = d3.select("#svg1"),
    width = +svg1.attr("width"),
    height = +svg1.attr("height");

//d3.select('body').append('svg1')
var simulation = d3.forceSimulation(svg1)
    .force("link", d3.forceLink().id(function (d) {
        return d.id;
    }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json(data, function (error, graph) {

    if (error == true) throw error;

    graph = data

    var link = svg1.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line");

    var node = svg1.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
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
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    node.append("title")
        .text(function (d) {
            return d.id;
        });

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

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

//        label.attr("x", function(d){ return d.x; })
//    			 .attr("y", function (d) {return d.y - 10; });
    }
});

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
