//CRUD DE LA TABLA CATEGORIA
//Función para traer información ingresada en categorias
function traerInformacioncategorias() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Category/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestacat) {
      console.log(respuestacat);
      pintarRespuestacat(respuestacat);
    },
  });
}
//Función para plasmar la información contenida en categorias
function pintarRespuestacat(respuestacat) {
  let myTable1 = "<table>";
  for (i = 0; i < respuestacat.length; i++) {
    myTable1 += "<tr>";
    myTable1 += "<td>" + respuestacat[i].name + "</td>";
    myTable1 += "<td>" + respuestacat[i].description + "</td>";
    myTable1 +=
      "<td> <button onclick='editarInformacioncategorias(" +
      respuestacat[i].id +
      ")''>Actualizar</button>";
    myTable1 +=
      "<td> <button onclick='eliminarInformacioncat(" +
      respuestacat[i].id +
      ")'>Borrar</button>";
    myTable1 += "</tr>";
  }
  myTable1 += "</table>";
  $("#resultadocat").html(myTable1);
}
//Función para guardar la información ingresada en los campos de categorias
function guardarInformacioncategorias() {
  if ($("#cname").val() == 0 || $("#cdescription").val() == 0) {
    alert("Debe diligenciar todos los campos");
  } else {
    let varc = {
      name: $("#cname").val(),
      description: $("#cdescription").val(),
    };
    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(varc),
      url: "http://168.138.130.33:8080/api/Category/save",

      success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
    alert("Se guardo correctamente");
  }
}
//Función para actualizar la información de una categoria ya ingresada
function editarInformacioncategorias(idElemento) {
  let myData = {
    id: idElemento,
    name: $("#cname").val(),
    description: $("#cdescription").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://168.138.130.33:8080/api/Category/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuestacat) {
      $("#resultadocat").empty();
      $("#cname").val("");
      $("#cdescription").val("");
      traerInformacioncategorias();
      alert("Se han actualizados los datos.");
    },
  });
}

function eliminarInformacioncat(idElemento) {
  let myData = {
    id: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://168.138.130.33:8080/api/Category/" + idElemento,
    type: "DELETE",
    contentType: "application/JSON",
    datatype: "JSON",
    data: JSON.stringify(myData),
    success: function (respuestacat) {
      $("#resultadocat").empty();
      traerInformacioncategorias();
      alert("Se ha eliminado el registro.");
    },
  });
}

//CRUD TABLA CUATRIMOTOS
//Función para traer información ingresada en cuatrimotos
function traerInformacioncuatrimotos() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Quadbike/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestacuatri) {
      console.log(respuestacuatri);
      pintarRespuestacuatrimotos(respuestacuatri);
    },
  });
}
//Función para plasmar la información contenida en cuatrimotos
function pintarRespuestacuatrimotos(respuestacuatri) {
  let myTable1 = "<table>";
  for (i = 0; i < respuestacuatri.length; i++) {
    myTable1 += "<tr>";
    myTable1 += "<td>" + respuestacuatri[i].name + "</td>";
    myTable1 += "<td>" + respuestacuatri[i].brand + "</td>";
    myTable1 += "<td>" + respuestacuatri[i].year + "</td>";
    myTable1 += "<td>" + respuestacuatri[i].description + "</td>";
    myTable1 +=
      "<td> <button onclick='editarInformacioncuatrimotos(" +
      respuestacuatri[i].id +
      ")''>Actualizar</button>";
    myTable1 +=
      "<td> <button onclick='eliminarInformacioncuatrimotos(" +
      respuestacuatri[i].id +
      ")'>Borrar</button>";
    myTable1 += "</tr>";
  }
  myTable1 += "</table>";
  $("#resultadocuatri").html(myTable1);
}
//Función para guardar la información ingresada en los campos de cuatrimotos
function guardarInformacioncuatrimotos() {
  if (
    $("#namect").val() == 0 ||
    $("#brandct").val() == 0 ||
    $("#yearct").val() == 0 ||
    $("#descriptionct").val() == 0
  ) {
    alert("Debe diligenciar todos los campos");
  } else {
    let varct = {
      name: $("#namect").val(),
      brand: $("#brandct").val(),
      year: $("#yearct").val(),
      description: $("#descriptionct").val(),
    };

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(varct),

      url: "http://168.138.130.33:8080/api/Quadbike/save",

      success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
    alert("Se guardo correctamente");
  }
}
//Función para actualizar la información de una cuatrimoto ya ingresada
function editarInformacioncuatrimotos(idElemento) {
  let myData = {
    id: idElemento,
    name: $("#namect").val(),
    brand: $("#brandct").val(),
    year: $("#yearct").val(),
    description: $("#descriptionct").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://168.138.130.33:8080/api/Quadbike/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuestacuatri) {
      $("#resultadocuatri").empty();
      $("#namect").val("");
      $("#brandct").val("");
      $("#yearct").val("");
      $("#descriptionct");
      traerInformacioncuatrimotos();
      alert("Se han actualizados los datos.");
    },
  });
}
//Función para eliminar una cuatrimoto creada, por medio de su id
function eliminarInformacioncuatrimotos(idElemento) {
  let myData = {
    id: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://168.138.130.33:8080/api/Quadbike/" + idElemento,
    type: "DELETE",
    contentType: "application/JSON",
    datatype: "JSON",
    data: JSON.stringify(myData),
    success: function (response) {
      $("#resultadocuatri").empty();
      traerInformacioncuatrimotos();
      alert("Se ha eliminado el registro.");
    },
  });
}
//CRUD TABLA CLIENTES
//Función para traer información ingresada en clientes
function traerInformacioncliente() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Client/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestacliente) {
      console.log(respuestacliente);
      pintarRespuestacliente(respuestacliente);
    },
  });
}
//Función para plasmar la información contenida en clientes
function pintarRespuestacliente(respuestacliente) {
  let myTable2 = "<table>";
  for (i = 0; i < respuestacliente.length; i++) {
    myTable2 += "<tr>";
    myTable2 += "<td>" + respuestacliente[i].email + "</td>";
    myTable2 += "<td>" + respuestacliente[i].password + "</td>";
    myTable2 += "<td>" + respuestacliente[i].name + "</td>";
    myTable2 += "<td>" + respuestacliente[i].age + "</td>";
    myTable2 +=
      "<td> <button onclick='editarInformacioncliente(" +
      respuestacliente[i].idClient +
      ")''>Actualizar</button>";
    myTable2 +=
      "<td> <button onclick='eliminarInformacioncliente(" +
      respuestacliente[i].idClient +
      ")'>Borrar</button>";
    myTable2 += "</tr>";
  }
  myTable2 += "</table>";
  $("#resultadocliente").html(myTable2);
}
//Función para guardar la información ingresada en los campos de cliente
function guardarInformacioncliente() {
  if (
    $("#emailcl").val() == 0 ||
    $("#passwordcl").val() == 0 ||
    $("#namecl").val() == 0 ||
    $("#agecl").val() == 0
  ) {
    alert("Debe diligenciar todos los campos");
  } else {
    let var4 = {
      email: $("#emailcl").val(),
      password: $("#passwordcl").val(),
      name: $("#namecl").val(),
      age: $("#agecl").val(),
    };

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(var4),
      url: "http://168.138.130.33:8080/api/Client/save",

      success: function () {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
    alert("Se guardo correctamente");
  }
}
//Función para actualizar la información de un cliente ya ingresado
function editarInformacioncliente(idElemento) {
  let myData = {
    idClient: idElemento,
    email: $("#emailcl").val(),
    password: $("#passwordcl").val(),
    name: $("#namecl").val(),
    age: $("#agecl").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://168.138.130.33:8080/api/Client/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuestacliente) {
      $("#resultadocliente").empty();
      $("#emailcl").val("");
      $("#passwordcl").val("");
      $("#namecl").val("");
      $("#agecl").val("");
      traerInformacioncliente();
      alert("Se han actualizados los datos.");
    },
  });
}
//Función para eliminar un cliente creado, por medio de su id
function eliminarInformacioncliente(idElemento) {
  let myData = {
    idClient: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    type: "DELETE",
    contentType: "application/json; charset=utf-8",
    datatype: "JSON",
    data: JSON.stringify(myData),
    url: "http://168.138.130.33:8080/api/Client/" + idElemento,
    success: function (response) {
      $("#resultadocliente").empty();
      traerInformacioncliente();
      alert("Se ha eliminado el registro.");
    },
  });
}
//CRUD de la tabla Mensaje
//Función para traer información ingresada en mensajes
function traerInformacionmensaje() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Message/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestamensaje) {
      console.log(respuestamensaje);
      pintarRespuestamensaje(respuestamensaje);
    },
  });
}
//Función para plasmar la información contenida en mensajes
function pintarRespuestamensaje(respuestamensaje) {
  let myTable3 = "<table>";
  for (i = 0; i < respuestamensaje.length; i++) {
    myTable3 += "<tr>";
    myTable3 += "<td>" + respuestamensaje[i].messageText + "</td>";
    myTable3 +=
      "<td> <button onclick='editarInformacionmensaje(" +
      respuestamensaje[i].idMessage +
      ")''>Actualizar</button>";
    myTable3 +=
      "<td> <button onclick='eliminarInformacionmensaje(" +
      respuestamensaje[i].idMessage +
      ")'>Borrar</button>";
    myTable3 += "</tr>";
  }
  myTable3 += "</table>";
  $("#resultadomensaje").html(myTable3);
}
//Función para guardar la información ingresada en los campos de mensaje
function guardarInformacionmensaje() {
  if ($("#messagetextc").val() == 0) {
    alert("Debe diligenciar todos los campos");
  } else {
    let var5 = {
      messageText: $("#messagetextc").val(),
    };

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(var5),

      url: "http://168.138.130.33:8080/api/Message/save",

      success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
    alert("Se guardo correctamente");
  }
}
//Función para actualizar la información de un mensaje ya ingresado
function editarInformacionmensaje(idElemento) {
  let myData = {
    idMessage: idElemento,
    messageText: $("#messagetextc").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://168.138.130.33:8080/api/Message/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuestamensaje) {
      $("#resultadomensaje").empty();
      $("#messagetextc").val("");
      traerInformacionmensaje();
      alert("Se han actualizados los datos.");
    },
  });
}
//Función para eliminar un mensaje creado, por medio de su id
function eliminarInformacionmensaje(idElemento) {
  let myData = {
    idMessage: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://168.138.130.33:8080/api/Message/" + idElemento,
    type: "DELETE",
    contentType: "application/JSON",
    datatype: "JSON",
    data: JSON.stringify(myData),
    success: function (respuestamensaje) {
      $("#resultadomensaje").empty();
      traerInformacioncliente();
      alert("Se ha eliminado el registro.");
    },
  });
}
//CRUD de la tabla Reservación
//Función para traer información ingresada en reservas
function traerInformacionreserva() {
  $.ajax({
    url: "http://168.138.130.33:8080/api/Reservation/all",
    type: "GET",
    datatype: "JSON",
    success: function (respuestareserva) {
      console.log(respuestareserva);
      pintarRespuestareserva(respuestareserva);
    },
  });
}
//Función para plasmar la información contenida en reservas
function pintarRespuestareserva(respuestareserva) {
  let myTable4 = "<table>";
  for (i = 0; i < respuestareserva.length; i++) {
    myTable4 += "<tr>";
    myTable4 += "<td>" + cnvFecha(respuestareserva[i].startDate) + "</td>";
    myTable4 += "<td>" + cnvFecha(respuestareserva[i].devolutionDate) + "</td>";
    myTable4 +=
      "<td> <button onclick='editarInformacionreserva(" +
      respuestareserva[i].idReservation +
      ")''>Actualizar</button>";
    myTable4 +=
      "<td> <button onclick='eliminarInformacionreserva(" +
      respuestareserva[i].idReservation +
      ")'>Borrar</button>";
    myTable4 += "</tr>";
  }
  myTable4 += "</table>";
  $("#resultadoreserva").html(myTable4);
}

function cnvFecha(fecha) {
  return fecha.substring(0, 10);
}
//Función para guardar la información ingresada en los campos de reserva
function guardarInformacionreserva() {
  if ($("#startDate").val() == 0 || $("#devolutionDate").val() == 0) {
    alert("Debe diligenciar todos los campos");
  } else {
    let var6 = {
      startDate: $("#startDate").val(),
      devolutionDate: $("#devolutionDate").val(),
    };

    $.ajax({
      type: "POST",
      contentType: "application/json; charset=utf-8",
      dataType: "JSON",
      data: JSON.stringify(var6),

      url: "http://168.138.130.33:8080/api/Reservation/save",

      success: function (response) {
        console.log(response);
        console.log("Se guardo correctamente");
        alert("Se guardo correctamente");
        window.location.reload();
      },

      error: function (jqXHR, textStatus, errorThrown) {
        window.location.reload();
        alert("No se guardo correctamente");
      },
    });
    alert("Se guardo correctamente");
  }
}
//Función para actualizar la información de una reserva ya ingresada
function editarInformacionreserva(idElemento) {
  let myData = {
    idReservation: idElemento,
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val(),
  };
  console.log(myData);
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://168.138.130.33:8080/api/Reservation/update",
    type: "PUT",
    data: dataToSend,
    contentType: "application/JSON",
    datatype: "JSON",
    success: function (respuestareserva) {
      $("#resultadoreserva").empty();
      $("#startDate").val("");
      $("#devolutionDate").val("");
      traerInformacionreserva();
      alert("Se han actualizados los datos.");
    },
  });
}
//Función para eliminar una reserva creada, por medio de su id
function eliminarInformacionreserva(idElemento) {
  let myData = {
    idReservation: idElemento,
  };
  let dataToSend = JSON.stringify(myData);
  $.ajax({
    url: "http://168.138.130.33:8080/api/Reservation/" + idElemento,
    type: "DELETE",
    contentType: "application/JSON",
    datatype: "JSON",
    data: JSON.stringify(myData),
    success: function (respuestareserva) {
      $("#resultadoreserva").empty();
      traerInformacioncliente();
      alert("Se ha eliminado el registro.");
    },
  });
}
