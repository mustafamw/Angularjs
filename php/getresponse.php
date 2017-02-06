<?php
	$data = file_get_contents("php://input");
	$objData = json_decode($data);
    if(isset($objData->token))
    {
		$token = $objData->token;
        auth($token);
    }
	else
	{
		$data['success'] = False;
		$data['errors'] = "Token Invalid!!";
		$data['messageError'] = $tokenautharr['error']['message'];
		echo json_encode($data);
	}
	
    function auth($token)
    {
        
        $url='https://2-dot-august-craft-119616.appspot.com/_ah/api/auth_jwt/v1/auth';
        
        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL,            $url );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true );
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'authorization: Bearer '.$token.''
        ));
        
        $tokenauth = curl_exec($ch);
        $tokenautharr = json_decode($tokenauth, true);
        if(isset($tokenautharr['error']) || $tokenauth == 'Not Found')
        {
			$data['success'] = False;
			$data['errors'] = "Token Invalid!!";
			$data['messageError'] = $tokenautharr['error']['message'];
			echo json_encode($data);
        }
        else
        {
			$data['success'] = True;
			$data['errors'] = False;
			$data['messageSuccess'] = $tokenautharr;
			echo json_encode($data);
        }
        curl_close ($ch);
    }
?>