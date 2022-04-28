import AceEditor from "react-ace";

import 'ace-builds/src-noconflict/ace';
import "ace-builds/src-noconflict/theme-cobalt";

export default function CustomAceEditor({onChange})
{
    return <AceEditor width="100%" theme="cobalt" fontSize={16} onChange={onChange}/>   
}