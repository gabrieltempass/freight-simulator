function RETURN_VALUES()
{
  var app = SpreadsheetApp;
  var ss_simulator = app.getActiveSpreadsheet();
  var ss_backend = app.openById("1ATPM3KYvlxks8qkPRVtPwvCKnliimlYskZ7vhNmbwxM");
  var simulador_sheet_simulator = ss_simulator.getSheetByName("Simulador");
  var simulador_sheet_backend = ss_backend.getSheetByName("Simulador");
  
  var city_seller = simulador_sheet_simulator.getRange("C7").getValue();
  var state_seller = simulador_sheet_simulator.getRange("C8").getValue();
  var modality = simulador_sheet_simulator.getRange("D11").getValue();
  var length = simulador_sheet_simulator.getRange("D12").getValue();
  var width = simulador_sheet_simulator.getRange("D13").getValue();
  var height = simulador_sheet_simulator.getRange("D14").getValue();
  var real_weight = simulador_sheet_simulator.getRange("D15").getValue();
  var price = simulador_sheet_simulator.getRange("D16").getValue();
  
  simulador_sheet_backend.getRange("C7").setValue(city_seller);
  simulador_sheet_backend.getRange("C8").setValue(state_seller);
  simulador_sheet_backend.getRange("D11").setValue(modality);
  simulador_sheet_backend.getRange("D12").setValue(length);
  simulador_sheet_backend.getRange("D13").setValue(width);
  simulador_sheet_backend.getRange("D14").setValue(height);
  simulador_sheet_backend.getRange("D15").setValue(real_weight);
  simulador_sheet_backend.getRange("D16").setValue(price);
  
  Utilities.sleep(10000);
  
  var capitals = simulador_sheet_backend.getRange(13, 7, 27).getValues();
  var interiors = simulador_sheet_backend.getRange(13, 8, 27).getValues();
  var freight_average_olist = simulador_sheet_backend.getRange("F8").getValue();
  var freight_average_correios = simulador_sheet_backend.getRange("I8").getValue();
  var comparison = "correios é " + Math.round(((freight_average_correios / freight_average_olist) - 1) * 100) + "% mais caro que olist";
  
  simulador_sheet_simulator.getRange(14, 7, 27).setValues(capitals);
  simulador_sheet_simulator.getRange(14, 9, 27).setValues(interiors);
  simulador_sheet_simulator.getRange("H7").setValue(freight_average_olist);
  simulador_sheet_simulator.getRange("H8").setValue(freight_average_correios);
  simulador_sheet_simulator.getRange("H9").setValue(comparison);
}
