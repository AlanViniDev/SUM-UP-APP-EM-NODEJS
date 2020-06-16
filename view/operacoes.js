function calcularVenda () {
				var operacao = document.getElementById("operacao").value;
				var valorVenda = document.getElementById("venda").value;
				switch (operacao){
					case '1' :
					let r1;
					let resultado1;
					r1 = ((2.49 / 100) * valorVenda);
					resultado1 = valorVenda - r1;
					alert ("Valor  a receber: " + resultado1.toFixed(2));
					break;
				
					case '2':
					let r2;
					let resultado2;
					r2 = ((4.99 / 100) * valorVenda);
					resultado2 = valorVenda - r2;
					alert ("Valor  a receber: " + resultado2.toFixed(2)+"\n\nO cliente paga 1x de: " + (valorVenda/1).toFixed(2));
					break;

					case '3':
					let r3;
					let resultado3;
					r3 = ((8.98 / 100) * valorVenda);
					resultado3 = valorVenda - r3;
					alert ("Valor  a receber: " + resultado3.toFixed(2)+"\n\nO cliente paga 2x de: "+ (valorVenda/2).toFixed(2));
					break;

					case '4':
					let r4;
					let resultado4;
					r4 = ((10.37 / 100) * valorVenda);
					resultado4 = valorVenda - r4;
					alert ("Valor  a receber: " + resultado4.toFixed(2)+"\n\nO cliente paga 3x de: "+ (valorVenda/3).toFixed(2));
					break;

					case '5':
					let r5;
					let resultado5;
					r5 = ((11.96 / 100) * valorVenda);
					resultado5 = valorVenda - r5;
					alert ("Valor  a receber: " + resultado5.toFixed(2)+"\n\nO cliente paga 4x de: "+ (valorVenda/4).toFixed(2));
					break;

					case '6':
					let r6;
					let resultado6;
					r6 = ((13.95 / 100) * valorVenda);
					resultado6 = valorVenda - r6;
					alert ("Valor  a receber: " + resultado6.toFixed(2)+"\n\nO cliente paga 5x de: "+ (valorVenda/5).toFixed(2));
					break;

					case '7':
					let r7;
					let resultado7;
					r7 = ((16.24 / 100) * valorVenda);
					resultado7 = valorVenda - r7;
					alert ("Valor  a receber: " + resultado7.toFixed(2)+"\n\nO cliente paga 6x de: "+ (valorVenda/6).toFixed(2));
					break;

					case '8':
					let r8;
					let resultado8;
					r8 = ((18.63 / 100) * valorVenda);
					resultado8 = valorVenda - r8;
					alert ("Valor  a receber: " + resultado8.toFixed(2)+"\n\nO cliente paga 7x de: "+ (valorVenda/7).toFixed(2));
					break;

					case '9':
					let r9;
					let resultado9;
					r9 = ((20.62 / 100) * valorVenda);
					resultado9 = valorVenda - r9;
					alert ("Valor  a receber: " + resultado9.toFixed(2)+"\n\nO cliente paga 8x de: "+ (valorVenda/8).toFixed(2));
					break;

					case '10':
					let r10;
					let resultado10;
					r10 = ((22.61 / 100) * valorVenda);
					resultado10 = valorVenda - r10;
					alert ("Valor  a receber: " + resultado10.toFixed(2)+"\n\nO cliente paga 9x de: "+ (valorVenda/9).toFixed(2));
					break;

					case '11':
					let r11;
					let resultado11;
					r11 = ((24.60 / 100) * valorVenda);
					resultado11 = valorVenda - r11;
					alert ("Valor  a receber: " + resultado11.toFixed(2)+"\n\nO cliente paga 10x de: "+ (valorVenda/10).toFixed(2));
					break;

					case '12':
					let r12;
					let resultado12;
					r12 = ((26.59 / 100) * valorVenda);
					resultado12 = valorVenda - r12;
					alert ("Valor  a receber: " + resultado12.toFixed(2)+"\n\nO cliente paga 11x de: "+ (valorVenda/11).toFixed(2));
					break;

					case '13':
					let r13;
					let resultado13;
					r13 = ((28.58 / 100) * valorVenda);
					resultado13 = valorVenda - r13;
					alert ("Valor  a receber: " + resultado13.toFixed(2)+"\n\nO cliente paga 12x de: "+ (valorVenda/12).toFixed(2));
					break;
				}

			}

			function calcularCompra (){
				var operacao = document.getElementById("operacao").value;
				var valorCompra =  document.getElementById("compra").value;
				switch (operacao){
					case '1':
					let res1 = (1 * 2.49 / 100);
					let res2 = (1 - res1);
					let resul3 = (valorCompra / res2);
					alert ("Valor a ser cobrado: "+resul3.toFixed(2));
					
					break;

					case '2':
					let res4 = (1 * 4.99 / 100);
					let res5 = (1 - res4);
					let resul6 = (valorCompra / res5);
					let parcelamento1x = (resul6 / 1);
					alert ("Valor a ser cobrado: "+resul6.toFixed(2)+"\n\nO cliente paga 1x de: "+parcelamento1x.toFixed(2));
					break;

					case '3':
					let res7 = (1 * 8.98 / 100);
					let res8 = (1 - res7);
					let resul9 = (valorCompra / res8);
					let parcelamento2x = (resul9 / 2);
					alert ("Valor a ser cobrado: "+resul9.toFixed(2)+"\n\nO cliente paga 2x de : "+ parcelamento2x.toFixed(2));
					break;

					case '4':
					let res10 = (1 * 10.37 / 100);
					let res11 = (1 - res10);
					let resul12 = (valorCompra / res11);
					let parcelamento3x = (resul12 / 3);
					alert ("Valor a ser cobrado: "+resul12.toFixed(2)+"\n\nO cliente paga 3x de: "+parcelamento3x.toFixed(2));
					break;

					case '5':
					let res13 = (1 * 11.96 / 100);
					let res14 = (1 - res13);
					let resul15 = (valorCompra / res14);
					let parcelamento4x = (resul15 / 4);
					alert ("Valor a ser cobrado: "+resul15.toFixed(2)+"\n\nO cliente paga 4x de: "+parcelamento4x.toFixed(2));
					break;

					case '6':
					let res16 = (1 * 13.95 / 100);
					let res17 = (1 - res16);
					let resul18 = (valorCompra / res17);
					let parcelamento5x = (resul18 / 5);
					alert ("Valor a ser cobrado: "+resul18.toFixed(2)+"\n\nO cliente paga 5x de: "+parcelamento5x.toFixed(2));
					break;

					case '7':
					let res19 = (1 * 16.24 / 100);
					let res20 = (1 - res19);
					let resul21 = (valorCompra / res20);
					let parcelamento6x = (resul21 / 6);
					alert ("Valor a ser cobrado: "+resul21.toFixed(2)+"\n\nO cliente paga 6x de: "+parcelamento6x.toFixed(2));
					break;

					case '8':
					let res22 = (1 * 18.63 / 100);
					let res23 = (1 - res22);
					let resul24 = (valorCompra / res23);
					let parcelamento7x =  (resul24 / 7);
					alert ("Valor a ser cobrado: "+resul24.toFixed(2)+"\n\nO cliente paga 7x de: "+parcelamento7x.toFixed(2));
					break;

					case '9':
					let res25 = (1 * 20.62 / 100);
					let res26 = (1 - res25);
					let resul27 = (valorCompra / res26);
					let parcelamento8x = (resul27 / 8);
					alert ("Valor a ser cobrado: "+resul27.toFixed(2)+"\n\nO cliente paga 8x de: "+parcelamento8x.toFixed(2));
					break;

					case '10':
					let res28 = (1 * 22.61 / 100);
					let res29 = (1 - res28);
					let resul30 = (valorCompra / res29);
					let parcelamento9x = (resul30 / 9);
					alert ("Valor a ser cobrado: "+resul30.toFixed(2)+"\n\nO cliente paga 9x de: "+parcelamento9x.toFixed(2));
					break;

					case '11':
					let res31 = (1 * 24.60 / 100);
					let res32 = (1 - res31);
					let resul34 = (valorCompra / res32);
					let parcelamento10x = (resul34 / 10);
					alert ("Valor a ser cobrado: "+resul34.toFixed(2)+"\n\nO cliente paga 10x de: "+parcelamento10x.toFixed(2));
					break;

					case '12':
					let res35 = (1 * 26.59 / 100);
					let res36 = (1 - res35);
					let resul37 = (valorCompra / res36);
					let parcelamento11x = (resul37 / 11);
					alert ("Valor a ser cobrado: "+resul37.toFixed(2)+"\n\nO cliente paga 11x de: "+parcelamento11x.toFixed(2));
					break;

					case '13':
					let res38 = (1 * 28.58 / 100);
					let res39 = (1 - res38);
					let resul40 = (valorCompra / res39);
					let parcelamento12x = (resul40 / 12);
					alert ("Valor a ser cobrado: "+resul40.toFixed(2)+"\n\nO cliente paga 12x de: "+parcelamento12x.toFixed(2));
					break;
				}

			}
	