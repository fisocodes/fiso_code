grammar fiso;

program: statement*;

statement: declaration | assignment | print | ifelse | while;

print: PRINT (expression | condition);

declaration: VAR ID;

assignment: ID ASSIGN (expression | condition);

condition:    condition lo condition    #conditionCondition
            | expression lo expression  #expressionCondition
            | LP condition RP           #parenthesisCondition
            | boolean                   #booleanCondition
            | NUMBER                    #numberCondition
            | ID                        #idCondition;

expression:   SUB expression                                #subExpression
            | expression operator=(MUL | DIV) expression    #muldivExpression
            | expression operator=(ADD | SUB) expression    #addsubExpression
            | LP expression RP                              #parenthesisExpression
            | NUMBER                                        #numberExpression
            | ID                                            #idExpression;

ifelse: ifblock elseifblock* elseblock?;

ifblock: IF condition LCB statement* RCB;

elseifblock: ELSE IF condition LCB statement* RCB;

elseblock: ELSE LCB statement* RCB;

while: WHILE condition LCB statement* RCB;

boolean: TRUE | FALSE;

lo: GREATHER | LESSER | GREATEQUAL | LESSEQUAL | AND | OR | EQUAL | DIFFERENT;

//GROUP CHARATERS
LP: '(';
RP: ')';
LCB: '{';
RCB: '}';

//ARITHMETIC OPERATORS
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';

//LOGIC OPERATORS
GREATHER: '>';
LESSER: '<';
GREATEQUAL: '>=';
LESSEQUAL: '<=';
AND: '&&';
OR: '||';
EQUAL: '==';
DIFFERENT: '!=';

//RESERVED WORDS
VAR: 'var';
PRINT: 'print';
IF: 'if';
ELSE: 'else';
WHILE: 'while';

ASSIGN: '=';

//VALUES
NUMBER: [0-9]+;
TRUE: 'true';
FALSE: 'false';

ID: [a-zA-Z]+[a-zA-Z0-9]*;

BLANKS: [ \t\r\n] -> skip;