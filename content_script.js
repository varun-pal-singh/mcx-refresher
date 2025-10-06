// This script runs on the specified page to automate button clicks.

console.log("Margin Utilization Auto-clicker script loaded.");

const DEFAULT_UI_LIST_INNER_HTML = `
<li class="clearFloatFromStart"><label style="width: 52px;" class="assoctext">Client Code</label>
        <ul id="control:0" wc="wc_RSK_qryMrgparam" wca="wca_bpid" mandatory="false" class="">
            <li>
                <div class="udctrl" type="udControl" id="MCB_SearchWC_wca_bpid_div" name="MCB_SearchWC_wca_bpid"
                    udctrltype="udc_Combo_QBE">
                    <ul>
                        <li><select title="DFLT" value="DFLT" tabindex="-1" data-tab="null"
                                name="propertyMap(MCB_SearchWC_wca_bpid_Cmb)"
                                id="propertyMap(MCB_SearchWC_wca_bpid_Cmb)"
                                class=" hide   bancs-comboBox_enhanced attrdtls " data-role="bancs.combo">
                                <option value="DFLT" id="DFLT" selected="selected">DFLT</option>
                                <option value="MCXX" id="MCXX">MCX</option>
                                <option value="MCXL" id="MCXL">MCXCCL</option>
                                <option value="CLCD" id="CLCD">CLCD</option>
                                <option value="CMCD" id="CMCD">CMID</option>
                                <option value="TMCD" id="TMCD">TMID</option>
                                <option value="SUMM" id="SUMM">Custodian Summary</option>
                                <option value="DETL" id="DETL">Custodian Detail</option>
                                <option value="NSDL" id="NSDL">NSDL</option>
                                <option value="CDSL" id="CDSL">CDSL</option>
                                <option value="ACPT" id="ACPT">Accepted</option>
                                <option value="APND" id="APND">Accepted Pending</option>
                                <option value="ALOC" id="ALOC">Allocation</option>
                                <option value="AUTH" id="AUTH">Authorised</option>
                                <option value="AUND" id="AUND">Authorised Pending</option>
                                <option value="28" id="28">Blocking Unblocking</option>
                                <option value="CANC" id="CANC">Cancelled</option>
                                <option value="CLNT" id="CLNT">Client</option>
                                <option value="CRTD" id="CRTD">Created</option>
                                <option value="CPND" id="CPND">Created Pending</option>
                                <option value="DLOC" id="DLOC">Deallocation</option>
                                <option value="25" id="25">Deposit</option>
                                <option value="PSET" id="PSET">Pending settlement</option>
                                <option value="27" id="27">Reallocation</option>
                                <option value="26" id="26">Release</option>
                                <option value="STLD" id="STLD">Settled</option>
                            </select>
                            <div class="bancs-comboBox" id="propertyMap(MCB_SearchWC_wca_bpid_Cmb)-main"
                                nativeid="propertyMap(MCB_SearchWC_wca_bpid_Cmb)" iseditabletablecombo="false"><a
                                    tabindex="null" data-tab="null" style="outline: medium none;"
                                    id="propertyMap(MCB_SearchWC_wca_bpid_Cmb)-box" class="bancs-comboBox_box"
                                    href="#"><span class="bancs-comboBox_inputs "
                                        id="propertyMap(MCB_SearchWC_wca_bpid_Cmb)-input" title="DFLT"> DFLT </span><i
                                        class="bancs-comboBox_buttons fa fa-angle-down fa-2x " aria-haspopup="true"
                                        aria-owns="propertyMap(MCB_SearchWC_wca_bpid_Cmb)-lists"
                                        id="propertyMap(MCB_SearchWC_wca_bpid_Cmb)-button" tabindex="-1"></i></a>
                                <div class="bancs-comboBox_divs bancs-comboBox_corner-all"
                                    id="propertyMap(MCB_SearchWC_wca_bpid_Cmb)-div" style="display: none;">
                                    <ul class="bancs-comboBox_list " aria-hidden="true"
                                        aria-labelledby="propertyMap(MCB_SearchWC_wca_bpid_Cmb)-button" role="listbox"
                                        id="propertyMap(MCB_SearchWC_wca_bpid_Cmb)-lists">
                                        <li class="bancs-comboBox_lielements bancs-comboBox_active" data-index="0"
                                            data-value="DFLT">DFLT</li>
                                        <li class="bancs-comboBox_lielements " data-index="1" data-value="MCXX">MCX</li>
                                        <li class="bancs-comboBox_lielements " data-index="2" data-value="MCXL">MCXCCL
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="3" data-value="CLCD">CLCD
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="4" data-value="CMCD">CMID
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="5" data-value="TMCD">TMID
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="6" data-value="SUMM">
                                            Custodian Summary</li>
                                        <li class="bancs-comboBox_lielements " data-index="7" data-value="DETL">
                                            Custodian Detail</li>
                                        <li class="bancs-comboBox_lielements " data-index="8" data-value="NSDL">NSDL
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="9" data-value="CDSL">CDSL
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="10" data-value="ACPT">
                                            Accepted</li>
                                        <li class="bancs-comboBox_lielements " data-index="11" data-value="APND">
                                            Accepted Pending</li>
                                        <li class="bancs-comboBox_lielements " data-index="12" data-value="ALOC">
                                            Allocation</li>
                                        <li class="bancs-comboBox_lielements " data-index="13" data-value="AUTH">
                                            Authorised</li>
                                        <li class="bancs-comboBox_lielements " data-index="14" data-value="AUND">
                                            Authorised Pending</li>
                                        <li class="bancs-comboBox_lielements " data-index="15" data-value="28">Blocking
                                            Unblocking</li>
                                        <li class="bancs-comboBox_lielements " data-index="16" data-value="CANC">
                                            Cancelled</li>
                                        <li class="bancs-comboBox_lielements " data-index="17" data-value="CLNT">Client
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="18" data-value="CRTD">Created
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="19" data-value="CPND">Created
                                            Pending</li>
                                        <li class="bancs-comboBox_lielements " data-index="20" data-value="DLOC">
                                            Deallocation</li>
                                        <li class="bancs-comboBox_lielements " data-index="21" data-value="25">Deposit
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="22" data-value="PSET">Pending
                                            settlement</li>
                                        <li class="bancs-comboBox_lielements " data-index="23" data-value="27">
                                            Reallocation</li>
                                        <li class="bancs-comboBox_lielements " data-index="24" data-value="26">Release
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="25" data-value="STLD">Settled
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><input type="text" autocomplete="off" class="attrdtls" instancetype="BP"
                                name="MCB_SearchWC_wca_bpid" id="MCB_SearchWC_wca_bpid" maxlength="35" value=""
                                parentid="null" data-role="null" data-type="bancs.Time" tabindex="0" data-tab="0"
                                title=""></li>
                        <li> <input type="button" value="" tabindex="0" data-tab="0"
                                src="../common/images/icon_mini_search.gif" class="icon_mini_search_enable butImgClass"
                                name="MCB_SearchWC_wca_bpid_button" id="MCB_SearchWC_wca_bpid_button"
                                title="icon_mini_search" alt="icon mini search" enablealways="0"
                                enableimg="../common/images/icon_mini_search.gif"
                                disableimg="../common/images/icon_mini_search_disable.gif" butid="-1" tableid=""
                                butvalue="icon_mini_search"></li>
                        <li><label id="MCB_SearchWC_wca_bpid_labelvalue" lang="null" xml:lang="null" class="assoctext"
                                accesskey="null" styleid="MCB_SearchWC_wca_bpid_labelvalue" alt="null"
                                for="MCB_SearchWC_wca_bpid"> </label></li>
                    </ul>
                </div>
            </li>
        </ul>
    </li>
    <li><label style="width: 61px;" class="assoctext">Account Type</label>
        <ul id="control:1" wc="wc_RSK_qryMrgparam" wca="wca_actype" mandatory="false" class="">
            <li><select title="" value="" tabindex="-1" data-tab="0" name="MCB_SearchWC_wca_actype"
                    id="MCB_SearchWC_wca_actype" class=" hide   bancs-comboBox_enhanced attrdtls  "
                    data-role="bancs.combo">
                    <option value="" id="" selected="selected"></option>
                    <option value="1" id="1">Client</option>
                    <option value="17" id="17">Own</option>
                </select>
                <div class="bancs-comboBox" id="MCB_SearchWC_wca_actype-main" nativeid="MCB_SearchWC_wca_actype"
                    iseditabletablecombo="false"><a tabindex="0" data-tab="0" style="outline: medium none;"
                        id="MCB_SearchWC_wca_actype-box" class="bancs-comboBox_box" href="#"><span
                            class="bancs-comboBox_inputs " id="MCB_SearchWC_wca_actype-input" title=""></span><i
                            class="bancs-comboBox_buttons fa fa-angle-down fa-2x " aria-haspopup="true"
                            aria-owns="MCB_SearchWC_wca_actype-lists" id="MCB_SearchWC_wca_actype-button"
                            tabindex="-1"></i></a>
                    <div class="bancs-comboBox_divs bancs-comboBox_corner-all" id="MCB_SearchWC_wca_actype-div"
                        style="display: none; height: 47.6px;">
                        <ul class="bancs-comboBox_list " aria-hidden="true"
                            aria-labelledby="MCB_SearchWC_wca_actype-button" role="listbox"
                            id="MCB_SearchWC_wca_actype-lists">
                            <li data-value="" data-index="0" class="bancs-comboBox_lielements bancs-comboBox_active">
                            </li>
                            <li data-value="1" data-index="1" class="bancs-comboBox_lielements">Client</li>
                            <li data-value="17" data-index="2" class="bancs-comboBox_lielements">Own</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <li class="clearFloatFromStart"><label style="width: 52px;" class="assoctext">TM / CP</label>
        <ul id="control:2" wc="wc_RSK_qryMrgparam" wca="wca_associatedtm" mandatory="false" class="">
            <li>
                <div class="udctrl" type="udControl" id="MCB_SearchWC_wca_associatedtm_div"
                    name="MCB_SearchWC_wca_associatedtm" udctrltype="udc_Combo_QBE">
                    <ul>
                        <li><select title="DFLT" value="DFLT" tabindex="-1" data-tab="null"
                                name="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)"
                                id="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)"
                                class=" hide   bancs-comboBox_enhanced attrdtls " data-role="bancs.combo">
                                <option value="DFLT" id="DFLT" selected="selected">DFLT</option>
                                <option value="MCXX" id="MCXX">MCX</option>
                                <option value="MCXL" id="MCXL">MCXCCL</option>
                                <option value="CLCD" id="CLCD">CLCD</option>
                                <option value="CMCD" id="CMCD">CMID</option>
                                <option value="TMCD" id="TMCD">TMID</option>
                                <option value="SUMM" id="SUMM">Custodian Summary</option>
                                <option value="DETL" id="DETL">Custodian Detail</option>
                                <option value="NSDL" id="NSDL">NSDL</option>
                                <option value="CDSL" id="CDSL">CDSL</option>
                                <option value="ACPT" id="ACPT">Accepted</option>
                                <option value="APND" id="APND">Accepted Pending</option>
                                <option value="ALOC" id="ALOC">Allocation</option>
                                <option value="AUTH" id="AUTH">Authorised</option>
                                <option value="AUND" id="AUND">Authorised Pending</option>
                                <option value="28" id="28">Blocking Unblocking</option>
                                <option value="CANC" id="CANC">Cancelled</option>
                                <option value="CLNT" id="CLNT">Client</option>
                                <option value="CRTD" id="CRTD">Created</option>
                                <option value="CPND" id="CPND">Created Pending</option>
                                <option value="DLOC" id="DLOC">Deallocation</option>
                                <option value="25" id="25">Deposit</option>
                                <option value="PSET" id="PSET">Pending settlement</option>
                                <option value="27" id="27">Reallocation</option>
                                <option value="26" id="26">Release</option>
                                <option value="STLD" id="STLD">Settled</option>
                            </select>
                            <div class="bancs-comboBox" id="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)-main"
                                nativeid="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)" iseditabletablecombo="false">
                                <a tabindex="null" data-tab="null" style="outline: medium none;"
                                    id="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)-box" class="bancs-comboBox_box"
                                    href="#"><span class="bancs-comboBox_inputs "
                                        id="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)-input" title="DFLT"> DFLT
                                    </span><i class="bancs-comboBox_buttons fa fa-angle-down fa-2x "
                                        aria-haspopup="true"
                                        aria-owns="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)-lists"
                                        id="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)-button"
                                        tabindex="-1"></i></a>
                                <div class="bancs-comboBox_divs bancs-comboBox_corner-all"
                                    id="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)-div" style="display: none;">
                                    <ul class="bancs-comboBox_list " aria-hidden="true"
                                        aria-labelledby="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)-button"
                                        role="listbox" id="propertyMap(MCB_SearchWC_wca_associatedtm_Cmb)-lists">
                                        <li class="bancs-comboBox_lielements bancs-comboBox_active" data-index="0"
                                            data-value="DFLT">DFLT</li>
                                        <li class="bancs-comboBox_lielements " data-index="1" data-value="MCXX">MCX</li>
                                        <li class="bancs-comboBox_lielements " data-index="2" data-value="MCXL">MCXCCL
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="3" data-value="CLCD">CLCD
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="4" data-value="CMCD">CMID
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="5" data-value="TMCD">TMID
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="6" data-value="SUMM">
                                            Custodian Summary</li>
                                        <li class="bancs-comboBox_lielements " data-index="7" data-value="DETL">
                                            Custodian Detail</li>
                                        <li class="bancs-comboBox_lielements " data-index="8" data-value="NSDL">NSDL
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="9" data-value="CDSL">CDSL
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="10" data-value="ACPT">
                                            Accepted</li>
                                        <li class="bancs-comboBox_lielements " data-index="11" data-value="APND">
                                            Accepted Pending</li>
                                        <li class="bancs-comboBox_lielements " data-index="12" data-value="ALOC">
                                            Allocation</li>
                                        <li class="bancs-comboBox_lielements " data-index="13" data-value="AUTH">
                                            Authorised</li>
                                        <li class="bancs-comboBox_lielements " data-index="14" data-value="AUND">
                                            Authorised Pending</li>
                                        <li class="bancs-comboBox_lielements " data-index="15" data-value="28">Blocking
                                            Unblocking</li>
                                        <li class="bancs-comboBox_lielements " data-index="16" data-value="CANC">
                                            Cancelled</li>
                                        <li class="bancs-comboBox_lielements " data-index="17" data-value="CLNT">Client
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="18" data-value="CRTD">Created
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="19" data-value="CPND">Created
                                            Pending</li>
                                        <li class="bancs-comboBox_lielements " data-index="20" data-value="DLOC">
                                            Deallocation</li>
                                        <li class="bancs-comboBox_lielements " data-index="21" data-value="25">Deposit
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="22" data-value="PSET">Pending
                                            settlement</li>
                                        <li class="bancs-comboBox_lielements " data-index="23" data-value="27">
                                            Reallocation</li>
                                        <li class="bancs-comboBox_lielements " data-index="24" data-value="26">Release
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="25" data-value="STLD">Settled
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><input type="text" autocomplete="off" class="attrdtls" instancetype="BP"
                                name="MCB_SearchWC_wca_associatedtm" id="MCB_SearchWC_wca_associatedtm" maxlength="35"
                                value="" parentid="null" data-role="null" data-type="bancs.Time" tabindex="0"
                                data-tab="0" title=""></li>
                        <li> <input type="button" value="" tabindex="0" data-tab="0"
                                src="../common/images/icon_mini_search.gif" class="icon_mini_search_enable butImgClass"
                                name="MCB_SearchWC_wca_associatedtm_button" id="MCB_SearchWC_wca_associatedtm_button"
                                title="icon_mini_search" alt="icon mini search" enablealways="0"
                                enableimg="../common/images/icon_mini_search.gif"
                                disableimg="../common/images/icon_mini_search_disable.gif" butid="-1" tableid=""
                                butvalue="icon_mini_search"></li>
                        <li><label id="MCB_SearchWC_wca_associatedtm_labelvalue" lang="null" xml:lang="null"
                                class="assoctext" accesskey="null" styleid="MCB_SearchWC_wca_associatedtm_labelvalue"
                                alt="null" for="MCB_SearchWC_wca_associatedtm"> </label></li>
                    </ul>
                </div>
            </li>
        </ul>
    </li>
    <li><label style="width: 61px;" class="assoctext">CM</label>
        <ul id="control:3" wc="wc_RSK_qryMrgparam" wca="wca_associatedcm" mandatory="false" class="">
            <li>
                <div class="udctrl" type="udControl" id="MCB_SearchWC_wca_associatedcm_div"
                    name="MCB_SearchWC_wca_associatedcm" udctrltype="udc_Combo_QBE">
                    <ul>
                        <li><select title="DFLT" value="DFLT" tabindex="-1" data-tab="null"
                                name="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)"
                                id="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)"
                                class=" hide   bancs-comboBox_enhanced attrdtls " data-role="bancs.combo">
                                <option value="DFLT" id="DFLT" selected="selected">DFLT</option>
                                <option value="MCXX" id="MCXX">MCX</option>
                                <option value="MCXL" id="MCXL">MCXCCL</option>
                                <option value="CLCD" id="CLCD">CLCD</option>
                                <option value="CMCD" id="CMCD">CMID</option>
                                <option value="TMCD" id="TMCD">TMID</option>
                                <option value="SUMM" id="SUMM">Custodian Summary</option>
                                <option value="DETL" id="DETL">Custodian Detail</option>
                                <option value="NSDL" id="NSDL">NSDL</option>
                                <option value="CDSL" id="CDSL">CDSL</option>
                                <option value="ACPT" id="ACPT">Accepted</option>
                                <option value="APND" id="APND">Accepted Pending</option>
                                <option value="ALOC" id="ALOC">Allocation</option>
                                <option value="AUTH" id="AUTH">Authorised</option>
                                <option value="AUND" id="AUND">Authorised Pending</option>
                                <option value="28" id="28">Blocking Unblocking</option>
                                <option value="CANC" id="CANC">Cancelled</option>
                                <option value="CLNT" id="CLNT">Client</option>
                                <option value="CRTD" id="CRTD">Created</option>
                                <option value="CPND" id="CPND">Created Pending</option>
                                <option value="DLOC" id="DLOC">Deallocation</option>
                                <option value="25" id="25">Deposit</option>
                                <option value="PSET" id="PSET">Pending settlement</option>
                                <option value="27" id="27">Reallocation</option>
                                <option value="26" id="26">Release</option>
                                <option value="STLD" id="STLD">Settled</option>
                            </select>
                            <div class="bancs-comboBox" id="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)-main"
                                nativeid="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)" iseditabletablecombo="false">
                                <a tabindex="null" data-tab="null" style="outline: medium none;"
                                    id="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)-box" class="bancs-comboBox_box"
                                    href="#"><span class="bancs-comboBox_inputs "
                                        id="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)-input" title="DFLT"> DFLT
                                    </span><i class="bancs-comboBox_buttons fa fa-angle-down fa-2x "
                                        aria-haspopup="true"
                                        aria-owns="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)-lists"
                                        id="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)-button"
                                        tabindex="-1"></i></a>
                                <div class="bancs-comboBox_divs bancs-comboBox_corner-all"
                                    id="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)-div" style="display: none;">
                                    <ul class="bancs-comboBox_list " aria-hidden="true"
                                        aria-labelledby="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)-button"
                                        role="listbox" id="propertyMap(MCB_SearchWC_wca_associatedcm_Cmb)-lists">
                                        <li class="bancs-comboBox_lielements bancs-comboBox_active" data-index="0"
                                            data-value="DFLT">DFLT</li>
                                        <li class="bancs-comboBox_lielements " data-index="1" data-value="MCXX">MCX</li>
                                        <li class="bancs-comboBox_lielements " data-index="2" data-value="MCXL">MCXCCL
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="3" data-value="CLCD">CLCD
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="4" data-value="CMCD">CMID
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="5" data-value="TMCD">TMID
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="6" data-value="SUMM">
                                            Custodian Summary</li>
                                        <li class="bancs-comboBox_lielements " data-index="7" data-value="DETL">
                                            Custodian Detail</li>
                                        <li class="bancs-comboBox_lielements " data-index="8" data-value="NSDL">NSDL
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="9" data-value="CDSL">CDSL
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="10" data-value="ACPT">
                                            Accepted</li>
                                        <li class="bancs-comboBox_lielements " data-index="11" data-value="APND">
                                            Accepted Pending</li>
                                        <li class="bancs-comboBox_lielements " data-index="12" data-value="ALOC">
                                            Allocation</li>
                                        <li class="bancs-comboBox_lielements " data-index="13" data-value="AUTH">
                                            Authorised</li>
                                        <li class="bancs-comboBox_lielements " data-index="14" data-value="AUND">
                                            Authorised Pending</li>
                                        <li class="bancs-comboBox_lielements " data-index="15" data-value="28">Blocking
                                            Unblocking</li>
                                        <li class="bancs-comboBox_lielements " data-index="16" data-value="CANC">
                                            Cancelled</li>
                                        <li class="bancs-comboBox_lielements " data-index="17" data-value="CLNT">Client
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="18" data-value="CRTD">Created
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="19" data-value="CPND">Created
                                            Pending</li>
                                        <li class="bancs-comboBox_lielements " data-index="20" data-value="DLOC">
                                            Deallocation</li>
                                        <li class="bancs-comboBox_lielements " data-index="21" data-value="25">Deposit
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="22" data-value="PSET">Pending
                                            settlement</li>
                                        <li class="bancs-comboBox_lielements " data-index="23" data-value="27">
                                            Reallocation</li>
                                        <li class="bancs-comboBox_lielements " data-index="24" data-value="26">Release
                                        </li>
                                        <li class="bancs-comboBox_lielements " data-index="25" data-value="STLD">Settled
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><input type="text" autocomplete="off" class="attrdtls" instancetype="BP"
                                name="MCB_SearchWC_wca_associatedcm" id="MCB_SearchWC_wca_associatedcm" maxlength="35"
                                value="" parentid="null" data-role="null" data-type="bancs.Time" tabindex="0"
                                data-tab="0" title=""></li>
                        <li> <input type="button" value="" tabindex="0" data-tab="0"
                                src="../common/images/icon_mini_search.gif" class="icon_mini_search_enable butImgClass"
                                name="MCB_SearchWC_wca_associatedcm_button" id="MCB_SearchWC_wca_associatedcm_button"
                                title="icon_mini_search" alt="icon mini search" enablealways="0"
                                enableimg="../common/images/icon_mini_search.gif"
                                disableimg="../common/images/icon_mini_search_disable.gif" butid="-1" tableid=""
                                butvalue="icon_mini_search"></li>
                        <li><label id="MCB_SearchWC_wca_associatedcm_labelvalue" lang="null" xml:lang="null"
                                class="assoctext" accesskey="null" styleid="MCB_SearchWC_wca_associatedcm_labelvalue"
                                alt="null" for="MCB_SearchWC_wca_associatedcm"> </label></li>
                    </ul>
                </div>
            </li>
        </ul>
    </li>
    <ul id="control:4" wc="wc_RSK_qryMrgparam" wca="wca_valuedate" mandatory="false" class="hidden">
        <li>
            <div class="udctrl" type="udControl" id="MCB_SearchWC_wca_valuedate_div" name="MCB_SearchWC_wca_valuedate"
                udctrltype="udc_dateControl"><input type="text" autocomplete="off" data-today="20251003"
                    data-format="DD/MM/YYYY" data-todayformat="YYYYMMDD" data-year_range="-100:+100"
                    class="attrdtls leftalign  hide" name="MCB_SearchWC_wca_valuedate" id="MCB_SearchWC_wca_valuedate"
                    maxlength="10" value="" parentid="null" data-role="bancs.Calender" data-type="null" tabindex="0"
                    data-tab="0"> <input type="button" value="" tabindex="0" data-tab="0"
                    src="../common/images/img_ButtonwithRedSquare.gif"
                    class="img_ButtonwithRedSquare_enable butImgClass hide" name="MCB_SearchWC_wca_valuedate_button"
                    id="MCB_SearchWC_wca_valuedate_button" title="Select Margin Date" alt="Select Margin Date"
                    enablealways="0" enableimg="../common/images/img_ButtonwithRedSquare.gif"
                    disableimg="../common/images/img_ButtonwithRedSquare_disable.gif" butid="0" tableid=""
                    butvalue="img_ButtonwithRedSquare"></div>
        </li>
    </ul>
    <li class="clearFloatFromStart"><label style="width: 52px;" class="assoctext">Category</label>
        <ul id="control:5" wc="wc_RSK_qryMrgparam" wca="wca_category" mandatory="false" class="">
            <li><select title="" value="" tabindex="-1" data-tab="0" name="MCB_SearchWC_wca_category"
                    id="MCB_SearchWC_wca_category" class=" hide   bancs-comboBox_enhanced attrdtls  "
                    data-role="bancs.combo">
                    <option value="" id="" selected="selected"></option>
                    <option value="ICM" id="ICM">ICM</option>
                    <option value="PCM" id="PCM">PCM</option>
                    <option value="ITCM" id="ITCM">ITCM</option>
                    <option value="BROK" id="BROK">Trading Member</option>
                    <option value="CLMR" id="CLMR">Clearing Member</option>
                </select>
                <div class="bancs-comboBox" id="MCB_SearchWC_wca_category-main" nativeid="MCB_SearchWC_wca_category"
                    iseditabletablecombo="false"><a tabindex="0" data-tab="0" style="outline: medium none;"
                        id="MCB_SearchWC_wca_category-box" class="bancs-comboBox_box" href="#"><span
                            class="bancs-comboBox_inputs " id="MCB_SearchWC_wca_category-input" title=""></span><i
                            class="bancs-comboBox_buttons fa fa-angle-down fa-2x " aria-haspopup="true"
                            aria-owns="MCB_SearchWC_wca_category-lists" id="MCB_SearchWC_wca_category-button"
                            tabindex="-1"></i></a>
                    <div class="bancs-comboBox_divs bancs-comboBox_corner-all" id="MCB_SearchWC_wca_category-div"
                        style="display: none; height: 93.2px;">
                        <ul class="bancs-comboBox_list " aria-hidden="true"
                            aria-labelledby="MCB_SearchWC_wca_category-button" role="listbox"
                            id="MCB_SearchWC_wca_category-lists">
                            <li data-value="" data-index="0" class="bancs-comboBox_lielements bancs-comboBox_active">
                            </li>
                            <li data-value="ICM" data-index="1" class="bancs-comboBox_lielements">ICM</li>
                            <li data-value="PCM" data-index="2" class="bancs-comboBox_lielements">PCM</li>
                            <li data-value="ITCM" data-index="3" class="bancs-comboBox_lielements">ITCM</li>
                            <li data-value="BROK" data-index="4" class="bancs-comboBox_lielements">Trading Member</li>
                            <li data-value="CLMR" data-index="5" class="bancs-comboBox_lielements">Clearing Member</li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </li>
    <ul id="control:6" wc="wc_RSK_qryMrgparam" wca="wca_CMName" mandatory="false" class="hidden">
        <li> <input type="text" autocomplete="off" class="attrdtls  hide" name="MCB_SearchWC_wca_CMName"
                id="MCB_SearchWC_wca_CMName" maxlength="400" value="DFLT" parentid="null" data-role="null"
                data-type="null" tabindex="0" data-tab="0"></li>
    </ul>
    <ul id="control:7" wc="wc_RSK_qryMrgparam" wca="wca_TMName" mandatory="false" class="hidden">
        <li> <input type="text" autocomplete="off" class="attrdtls  hide" name="MCB_SearchWC_wca_TMName"
                id="MCB_SearchWC_wca_TMName" maxlength="400" value="DFLT" parentid="null" data-role="null"
                data-type="null" tabindex="0" data-tab="0"></li>
    </ul>
    <ul id="control:8" wc="wc_RSK_qryMrgparam" wca="wca_datedummy1" mandatory="false" class="hidden">
        <li>
            <div class="udctrl" type="udControl" id="MCB_SearchWC_wca_datedummy1_div" name="MCB_SearchWC_wca_datedummy1"
                udctrltype="udc_dateControl"><input type="text" autocomplete="off" data-today="20251003"
                    data-format="DD/MM/YYYY" data-todayformat="YYYYMMDD" data-year_range="-100:+100"
                    class="attrdtls leftalign  hide" name="MCB_SearchWC_wca_datedummy1" id="MCB_SearchWC_wca_datedummy1"
                    maxlength="10" value="" parentid="null" data-role="bancs.Calender" data-type="null" tabindex="0"
                    data-tab="0"> <input type="button" value="" tabindex="0" data-tab="0"
                    src="../common/images/img_ButtonwithRedSquare.gif"
                    class="img_ButtonwithRedSquare_enable butImgClass hide" name="MCB_SearchWC_wca_datedummy1_button"
                    id="MCB_SearchWC_wca_datedummy1_button" title="Select From Date" alt="Select From Date"
                    enablealways="0" enableimg="../common/images/img_ButtonwithRedSquare.gif"
                    disableimg="../common/images/img_ButtonwithRedSquare_disable.gif" butid="1" tableid=""
                    butvalue="img_ButtonwithRedSquare"></div>
        </li>
    </ul>
    <ul id="control:9" wc="wc_RSK_qryMrgparam" wca="wca_datedummy2" mandatory="false" class="hidden">
        <li>
            <div class="udctrl" type="udControl" id="MCB_SearchWC_wca_datedummy2_div" name="MCB_SearchWC_wca_datedummy2"
                udctrltype="udc_dateControl"><input type="text" autocomplete="off" data-today="20251003"
                    data-format="DD/MM/YYYY" data-todayformat="YYYYMMDD" data-year_range="-100:+100"
                    class="attrdtls leftalign  hide" name="MCB_SearchWC_wca_datedummy2" id="MCB_SearchWC_wca_datedummy2"
                    maxlength="10" value="" parentid="null" data-role="bancs.Calender" data-type="null" tabindex="0"
                    data-tab="0"> <input type="button" value="" tabindex="0" data-tab="0"
                    src="../common/images/img_ButtonwithRedSquare.gif"
                    class="img_ButtonwithRedSquare_enable butImgClass hide" name="MCB_SearchWC_wca_datedummy2_button"
                    id="MCB_SearchWC_wca_datedummy2_button" title="Select To Date" alt="Select To Date" enablealways="0"
                    enableimg="../common/images/img_ButtonwithRedSquare.gif"
                    disableimg="../common/images/img_ButtonwithRedSquare_disable.gif" butid="2" tableid=""
                    butvalue="img_ButtonwithRedSquare"></div>
        </li>
    </ul>
`

// --- Configuration Constants ---
const FORM_ID = 'RSK335ID';
const FIELD_UL_SELECTOR = `form#${FORM_ID} div#header ul#fieldControl`;
const SEARCH_BUTTON_SELECTOR = `form#${FORM_ID} div#header ul#buttonContainer input#Search`;
const STORAGE_KEY = 'last_search_click_time';
const RECURRING_INTERVAL_MS = 300000;       // 5 minutes (300,000 milliseconds)
const CHECK_INTERVAL_MS = 500;              // 0.5 seconds jitter

// --- Global Timer Variable ---
let recurringTimerId = null; // Holds the ID for the continuous 5-minute loop

// --- Proxy Identification & Robustness Constants ---
const MAGIC_FLAG_NAME = 'auto-capture';
const MAGIC_FLAG_VALUE = 'true';
// const EVENT_INFO_FIELD_ID = 'MCBrowserEventInformation';


/**
 * Persists the current timestamp to storage. This ensures the timer persists
 * across browser sessions and synchronizes the next scheduled click.
 * @param {boolean} isAutoClick - True if triggered by the extension, false if by the user.
 */
function updateLastClickTime(isAutoClick = false) {
    const now = Date.now();
    localStorage.setItem(STORAGE_KEY, now);
    console.log(`[STORAGE] Updated last click time (${isAutoClick ? 'Auto' : 'User'}): ${new Date(now).toLocaleTimeString()}`);
}

/**
 * Sets up a click listener on the search button. When the user manually clicks,
 * this function updates the stored timestamp, effectively resetting the 5-minute
 * countdown for the auto-refresh cycle.
 */
function setupUserInteractionListener() {
    const searchButton = document.querySelector(SEARCH_BUTTON_SELECTOR);
    if (searchButton) {
        // When the user clicks, update the time in storage immediately.
        searchButton.addEventListener('click', () => {
            updateLastClickTime(false);
            // Crucially, we also reset the recurring interval so the new countdown starts clean.
            if (recurringTimerId) {
                clearInterval(recurringTimerId);
                console.log('[SYNC] Auto-refresh interval stopped due to user interaction.');
                // Re-start the interval after the full 5 minutes from this moment.
                startRecurringInterval(RECURRING_INTERVAL_MS);
            }
            // Allow the native click to proceed, which updates the table via AJAX.
        });
        console.log('[SYNC] User interaction listener attached to Search button.');
    } else {
        console.warn('[SYNC] Could not attach user interaction listener.');
    }
}

/**
 * Performs the core execution: resets fields, adds magic flag, updates time, and clicks search.
 * This is the task that is run repeatedly by the continuous interval.
 */
function executeAutoClickJob() {
    const form = document.getElementById(FORM_ID);
    const uList = document.querySelector(FIELD_UL_SELECTOR);
    const searchButton = document.querySelector(SEARCH_BUTTON_SELECTOR);

    if (!form || !uList || !searchButton) {
        console.error("[EXECUTE] Critical elements are missing. Cannot execute auto-click.");
        // If critical elements disappear, stop the timer
        if (recurringTimerId) clearInterval(recurringTimerId);
        return;
    }

    // --- 1. Reset the Form Fields (Your working logic) ---
    uList.innerHTML = DEFAULT_UI_LIST_INNER_HTML;
    console.log("[EXECUTE] Form fields successfully reset via innerHTML replacement.");


    // --- 2. Inject the Magic Flag (Proxy identification) ---
    let magicInput = form.querySelector(`input[name="${MAGIC_FLAG_NAME}"]`);
    if (!magicInput) {
        magicInput = document.createElement('input');
        magicInput.type = 'hidden';
        magicInput.name = MAGIC_FLAG_NAME;
        form.appendChild(magicInput);
    }
    magicInput.value = MAGIC_FLAG_VALUE;
    console.log(`[EXECUTE] Added magic flag: ${MAGIC_FLAG_NAME}=${MAGIC_FLAG_VALUE}`);


    // --- 3. Clear Event Info Field (Crucial for clean form submission) ---
    // const eventInfoInput = form.querySelector(`input#${EVENT_INFO_FIELD_ID}`);
    // if (eventInfoInput) {
    //     eventInfoInput.value = '';
    //     console.log(`[EXECUTE] Cleared ${EVENT_INFO_FIELD_ID} field.`);
    // }

    // --- 4. Update Time and Click ---
    // Update the time in storage to mark the latest successful auto-click.
    updateLastClickTime(true);

    // Perform the click, which triggers the table update via AJAX.
    searchButton.click();
    console.log("[EXECUTE] Search button clicked successfully (Auto-Refresh).");
}

/**
 * Starts the continuous 5-minute auto-click interval.
 * @param {number} delayMs - The delay before the first execution, which will then repeat every 5 min.
 */
function startRecurringInterval(delayMs) {
    // Clear any existing interval just in case
    if (recurringTimerId) {
        clearInterval(recurringTimerId);
        recurringTimerId = null;
    }

    // Schedule the first click using setTimeout for the calculated initial delay
    console.log(`[SYNC] Scheduling first execution in ${delayMs / 1000} seconds.`);

    setTimeout(() => {
        // 1. Run the job immediately (either catch-up or after initial delay)
        executeAutoClickJob();

        // 2. Start the continuous interval, repeating every 5 minutes from now on.
        recurringTimerId = setInterval(executeAutoClickJob, RECURRING_INTERVAL_MS);
        console.log(`[SYNC] Continuous auto-click interval started. Recurring every ${RECURRING_INTERVAL_MS / 60000} minutes.`);

    }, delayMs);
}

/**
 * Main function. Calculates the time remaining until the next auto-refresh
 * based on the last recorded click time, and schedules the job.
 */
function checkAndStart() {
    const form = document.getElementById(FORM_ID);
    const uList = document.querySelector(FIELD_UL_SELECTOR);

    if (form && uList) {
        // 1. Attach user click listener immediately
        setupUserInteractionListener();

        // 2. Determine the initial delay to synchronize the countdown
        const lastClickTime = parseInt(localStorage.getItem(STORAGE_KEY) || 0, 10);
        const now = Date.now();

        let initialDelay = RECURRING_INTERVAL_MS; // Default to 5 minutes

        if (lastClickTime > 0) {
            const timeElapsed = now - lastClickTime;
            const timeRemaining = RECURRING_INTERVAL_MS - timeElapsed;

            // If time remaining is negative (missed a beat), fire immediately (100ms minimum).
            initialDelay = Math.max(100, timeRemaining);

            const minutesRemaining = (initialDelay / 1000 / 60).toFixed(2);
            console.log(`[SYNC] Last click detected ${Math.round(timeElapsed / 1000)}s ago. Next auto-refresh initial delay: ${minutesRemaining} minutes (${initialDelay}ms).`);
        } else {
             // First time running. Set the initial click after the full interval.
             console.log(`[SYNC] No previous click found. Scheduling first auto-refresh in 5 minutes.`);
        }

        // 3. Start the entire sequence
        startRecurringInterval(initialDelay);

    } else {
        // Elements not ready, retry the check after a short delay
        setTimeout(checkAndStart, CHECK_INTERVAL_MS);
    }
}

// Kick off the continuous check
checkAndStart();