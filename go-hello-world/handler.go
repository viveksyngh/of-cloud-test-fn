package function

import (
	"fmt"
)

//Handle a serverless request
func Handle(req []byte) string {
	return fmt.Sprintf("Hello, from Golnag Template. You said: %s", string(req))
}
