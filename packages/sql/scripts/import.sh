#!/bin/bash

files=( backup/*.sql.gz )

PS3="Select backup file to import, or 0 to exit: "
select file in "${files[@]}"; do
		if [[ $REPLY == "0" ]]; then
				echo "Bye!" >&2
				exit
		elif [[ -z $file ]]; then
				echo "Invalid choice, try again" >&2
		else
				echo "gunzip -c $file | docker-compose exec -T -u postgres sql psql robot"
				break
		fi
done
