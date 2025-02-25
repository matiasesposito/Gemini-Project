SELECT *
FROM evaluadores
WHERE 
    ((INSTR(nombre, 'Marcela') > 0) +
    (INSTR(nombre, 'Laura') > 0)) >= 2;  -- Debe coincidir con al menos 2 palabras