describe("Imprimir imprimirAzul(3)", function() {
  it("deveria imprimir Azul Azul Azul", function() {
	imprimirAzul(3);
	assert.equal(console.toString(), "Azul\nAzul\nAzul\n")
  });
});

