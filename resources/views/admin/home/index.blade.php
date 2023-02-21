<div class="container">
    <div class="row">
        <div class="col-md">
            <p class="text-center">
                <img src="{{ asset('assets/img/SITE_PUMA_LOGO_PUMA.png') }}" width="150px;"/>
                <h2 class="text-center">Administrador Train Puma</h2>
            </p>
        </div>
    </div>
    <div class="row">
        <br /><br />
    </div>
    <div class="row">
        <h3>Limite registro</h3>
    </div>
    <div class="row">
        <div class="col-md-12">

            <ul>
                <form action="{{ url('/admin/user/limit') }}" method="GET">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                    Limite usuarios
                    <input type="text" name="limit_user"  value="{{ $limit }}" />

                    <input type="submit" value="enviar">
                </form>
            </ul>
        </div>

    </div>

    <div class="row">
        <h3>Descagar registros</h3>
    </div>
    <div class="row">
        <div class="col-md-12">

            <ul>
                <form action="{{ url('/admin/user/records') }}" method="GET">
                    <input type="hidden" name="_token" value="{{ csrf_token() }}" />
                    Registros usuarios
                    <select name="venue_id" required>
                        <option value="">-- selecionar --</option>
                        @foreach($venues as $venue)
                            <option value="{{ $venue->id }}" >{{ $venue->name }}</option>
                        @endforeach
                    </select>

                    <input type="submit" value="enviar">
                </form>
            </ul>
        </div>

    </div>


</div>