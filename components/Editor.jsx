import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/ace';
import "ace-builds/src-noconflict/theme-cobalt";

export default function CustomAceEditor({onChange, height, value, readOnly})
{
    return <AceEditor value={value} width="100%" height={height} theme="cobalt" fontSize={16} onChange={onChange} readOnly={readOnly}/>   
}