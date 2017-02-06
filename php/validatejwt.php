<?php
	
	$data = file_get_contents("php://input");
	$objData = json_decode($data);
	
	if(isset($objData->username) && isset($objData->password))
	{
		    $username = $objData->username;
		    $password = $objData->password;
	    loginauth($username, $password);
	}
    else
    {
	    header('Location: http://localhost:8888/Platform-Angular/Platform-Angular/WebContent/#/');
    }
    
	function loginauth($username, $password)
	{
	    $url = 'https://2-dot-august-craft-119616.appspot.com/_ah/api/auth_jwt/v1/login';
	    $arr = array('username'=>$username, 'password'=>$password);
	    $data_string = json_encode($arr);  
	
	    $ch = curl_init();
	
	    curl_setopt($ch, CURLOPT_URL,            $url );
	    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                                                                     
		curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);                                                                  
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);                                                                      
		curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                                                          
		    'Content-Type: application/json',                                                                                
		    'Content-Length: ' . strlen($data_string))                                                                       
		);   
	    
	    $loginauth = curl_exec($ch);
	    $loginautharr = json_decode($loginauth, true);
	    //Check if API is Working
	    if(!$loginauth || $loginauth == 'Not Found')
	    {
			    $data['success'] = False;
			    $data['errors'] = True;
			    $data['messageError'] = 'Check API Server';
			    echo json_encode($data);
	    }
	    //If Login Does not match
	    else if(isset($loginautharr['error']))
	    {
			    $data['success'] = False;
			    $data['errors'] = True;
			    $data['messageError'] = $loginautharr['error']['message'];
			    echo json_encode($data);
	    }
	    //Get respond token
	    else
	    {
			$data['success'] = True;
			$data['errors'] = False;
			$data['token'] = $loginautharr['token'];
			echo json_encode($data);
	    }
	}

?>