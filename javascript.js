var Pessoa= function(){
                this.nome;
                this.salarioBruto;
                this.descontoInss;
                this.descontoInssP;
                this.descontIrpf;
                this.descontoIrpfP;
                this.salarioLiquido;
            }

            /*cria uma lista vazia para acrecentar pessoas*/
            var pessoas= new Array();
                
            var btn= document.querySelector("button");
            btn.onclick=function(){
            /*Cria um novo objeto pessoa*/
                pessoa=new Pessoa();
                pessoa.nome=document.getElementById("nome").value;
                pessoa.salarioBruto=document.getElementById("salario_bruto").value;

                if (pessoa.salarioBruto<1751){
                    pessoa.descontoInssP = 0.08;
                    pessoa.descontoInss = pessoa.salarioBruto* pessoa.descontoInssP;
                    pessoa.descontoInssP*= 100;
                }
                else if (pessoa.salarioBruto>1751.83 && pessoa.salarioBruto<2919.73){
                    pessoa.descontoInssP = 0.09;
                    pessoa.descontoInss = pessoa.salarioBruto* pessoa.descontoInssP;
                    pessoa.descontoInssP*= 100;
                }
                else if (pessoa.salarioBruto>2919.74 && pessoa.salarioBruto<5839.45){
                    pessoa.descontoInssP = 0.11;
                    pessoa.descontoInss = pessoa.salarioBruto* pessoa.descontoInssP;
                    pessoa.descontoInssP*= 100;
                }
                else{
                    pessoa.descontoInssP = 621.04;
                    pessoa.descontoInss = 621.04;
                }

                if(pessoa.salarioBruto - pessoa.descontoInss <1903.98){
                    pessoa.descontoIrpf = 0;
                    pessoa.descontoIrpfP = 0;
                }
                else if(pessoa.salarioBruto-pessoa.descontoInss >1903.99 && pessoa.salarioBruto - pessoa.descontoInss <2826.65){
                    pessoa.descontoIrpfP = 0.075;
                    pessoa.descontoIrpf = (pessoa.salarioBruto - pessoa.descontoInss) * pessoa.descontoIrpfP;
                    pessoa.descontoIrpfP *= 100;
                }
                else if(pessoa.salarioBruto - pessoa.descontoInss >2826.66 && pessoa.salarioBruto - pessoa.descontoInss <3751.05){
                    pessoa.descontoIrpfP = 0.15;
                    pessoa.descontoIrpf = (pessoa.salarioBruto - pessoa.descontoInss) * pessoa.descontoIrpfP;
                    pessoa.descontoIrpfP *= 100;
                }
                else if(pessoa.salarioBruto - pessoa.descontoInss >3751.06 && pessoa.salarioBruto - pessoa.descontoInss <4664.68){
                    pessoa.descontoIrpfP = 0.225;
                    pessoa.descontoIrpf = (pessoa.salarioBruto - pessoa.descontoInss) * pessoa.descontoIrpfP;
                    pessoa.descontoIrpfP *= 100;
                }
                else{
                    pessoa.descontoIrpfP = 0.275;
                    pessoa.descontoIrpf = (pessoa.salarioBruto - pessoa.descontoInss) * pessoa.descontoInssP;
                    pessoa.descontoIrpfP *= 100;
        }

                pessoa.descontoIrpfP = parseFloat(pessoa.descontoIrpfP);
                pessoa.descontoInssP = parseFloat(pessoa.descontoInssP);
                pessoa.descontoIrpf = parseFloat(pessoa.descontoIrpf);
                pessoa.descontoInss = parseFloat(pessoa.descontoInss);
                pessoa.descontoIrpf = pessoa.descontoIrpf.toFixed(2)
                pessoa.descontoInss = pessoa.descontoInss.toFixed(2)
                pessoa.salarioLiquido = pessoa.salarioBruto - pessoa.descontoInss - pessoa.descontoIrpf;
                pessoa.salarioLiquido = pessoa.salarioLiquido.toFixed(2)

            /*Adiciona uma pessoa a lista*/
                pessoas.push(pessoa);    
                atualizarTabela(pessoa);             
            }
                
            var atualizarTabela= function(pessoa){
            var tabela = document.getElementById('lista');
            var numeroLinhas = tabela.rows.length;
            var linha = tabela.insertRow(numeroLinhas);
            var celNome = linha.insertCell(0);
            var celSalarioBruto  = linha.insertCell(1);
            var celDescontoInss = linha.insertCell(2);
            var celDescontoInssP = linha.insertCell(3);
            var celDescontoIrpf = linha.insertCell(4);
            var celDescontoIrpfP = linha.insertCell(5);
            var celSalarioLiquido = linha.insertCell(6); 
            
            celNome.innerHTML = pessoa.nome; 
            celSalarioBruto.innerHTML  = pessoa.salarioBruto;
            celDescontoInss.innerHTML = pessoa.descontoInss;
            celDescontoInssP.innerHTML = pessoa.descontoInssP;
            celDescontoIrpf.innerHTML = pessoa.descontoIrpfP;
            celDescontoIrpfP.innerHTML = pessoa.descontoIrpfP;
            celSalarioLiquido.innerHTML = pessoa.salarioLiquido;
            }