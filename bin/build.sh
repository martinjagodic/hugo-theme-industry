#!/bin/bash

if [[ "$CONTEXT" = "production" ]]
then
  echo ----- PRODUCTION
  hugo --gc -b $URL
  status=$?
else
  echo +++++ PREVIEW
  hugo --gc -b $DEPLOY_PRIME_URL
  status=$?
fi
echo -------------------

if [ $status -eq 0 ]
then
  # npm run env
  echo "Build success ......"
else
  echo "Build failure ############# " >&2
fi

exit $status
