// Sample AL code to test indent colorization
table 50100 "Customer Extension"
{
    fields
    {
        field(1; "No."; Code[20])
        {
            Caption = 'No.';
            DataClassification = CustomerContent;
        }
        field(2; Name; Text[100])
        {
            Caption = 'Name';
            DataClassification = CustomerContent;
            
            trigger OnValidate()
            begin
                if Name = '' then
                    Error('Name cannot be empty');
            end;
        }
    }
    
    keys
    {
        key(PK; "No.")
        {
            Clustered = true;
        }
    }
    
    procedure DoSomething()
    var
        i: Integer;
    begin
        for i := 1 to 10 do begin
            if i mod 2 = 0 then begin
                Message('Even number: %1', i);
            end else begin
                Message('Odd number: %1', i);
            end;
        end;
    end;
}
