function max(array){
	var max_number=0;
	var a_length=array.length;
	if(a_length>1){
		for(var i=0;i<array.length;i++)
			{
				if(array[i]>max_number)
				{
					max_number=arr[i];
				}
			}
			console.log("The maxium  number in the array is "+ max_number);
			for ( var i=0; i< a_length;i++)
			{
				for(var j=i;j<array.length;j++){
						if(array[j]<array[j+1]){
								var temp=array[j];
								array[j]=array[j+1];
								array[j+1]=temp;
							}
						}
			}
					console.log("The largest three numbers in the array are "+ array[0]+","+array[1]+","+array[2]);
				}else{
					console.log("Array Length error");
				}
			}